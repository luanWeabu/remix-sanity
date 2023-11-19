import imageUrlBuilder from "@sanity/image-url";
import * as React from "react";
import { Settings } from "~/types/footer_type";
import { projectId, dataset } from "../lib/santity";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

export interface IFooterProps {
  footerQuery: Settings[];
}

export function Footer({ footerQuery }: IFooterProps) {
  const builder = imageUrlBuilder({ projectId, dataset });
  const filterQueryData = [footerQuery[0]];
  const newsLetter = filterQueryData[0].newsletter;

  const Header = filterQueryData[0].header;
  const Footer = filterQueryData[0].footer;
  const FooterColumnLink = Footer?.columnLinks;
  // const FooterMainLink = FooterColumnLink?.map((item) => {
  //   let itemMainLink = item.mainLink;
  //   return itemMainLink?.map((itemMainLink) => {
  //     return itemMainLink;
  //   });
  // });

  const FooterMainLink = FooterColumnLink?.flatMap((item) => item.mainLink);

  const FooterSubLink = FooterColumnLink?.map((item) => item.subLink);

  const Other = filterQueryData[0].other;
  const Social = filterQueryData[0].social;

  const filterMainLink = FooterColumnLink?.[0]?._key;

  return (
    <footer>
      <div className="flex justify-center flex-col text-center bg-[#0f172a] h-auto text-white">
        {newsLetter && (
          <>
            <div className="pt-16 gap-4 flex flex-col py-8">
              <h2 className="font-semibold text-2xl">{newsLetter.heading}</h2>
              <p>{newsLetter.desc}</p>
              <div className="mx-auto w-3/6 space-x-2">
                <form className="flex items-center   justify-center">
                  <input
                    type="email"
                    placeholder="Your Email address"
                    className="py-2 px-4 rounded-l-3xl border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 flex-grow"
                  />
                  <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-r-md">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4  ml-6 my-11">
              <div className="text-left">
                <div className="gap-4">
                  {Header?.logo?.asset?._ref && (
                    <img
                      src={builder
                        .image(Header.logo.asset._ref)
                        .width(200)
                        .height(200)
                        .quality(80)
                        .url()}
                      alt={Header?.logo?._type}
                      className="mb-4"
                      width={200}
                      height={200}
                    />
                  )}
                  <p className="mb-4">{Other?.address1}</p>
                  <p className="mb-4">{Other?.address2}</p>
                  <p className="mb-4">{Other?.email}</p>
                  <p className="mb-4">{Other?.phoneNumber}</p>
                  <div className="flex gap-5">
                    <span>
                      <a href={Social?.facebook}>
                        <FaFacebook />
                      </a>
                    </span>
                    <span>
                      <a href={Social?.twitter}>
                        <FaTwitter />
                      </a>
                    </span>
                    <span>
                      <a href={Social?.instagram}>
                        <FaInstagram />
                      </a>
                    </span>
                    <span>
                      <a href={Social?.pinterest}>
                        <FaPinterest />
                      </a>
                    </span>
                    <span>
                      <a href={Social?.youtube}>
                        <FaYoutube />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              {FooterMainLink?.map((item) => (
                <div key={item?._key}>
                  <h2 className="pb-12">{item?.title}</h2>
                  {FooterSubLink?.[FooterMainLink.indexOf(item)]?.map(
                    (itemSubLink) => (
                      <div key={itemSubLink._key} className="p-2">
                        <p>{itemSubLink.title}</p>
                      </div>
                    )
                  )}
                </div>
              ))}

              <div>
                <h2 className="pb-12">OPENING TIME</h2>
                <p className="p-2">Mon - Fri:8AM - 9PM</p>
                <p className="p-2">Sat:9 AM - 8 PM</p>
                <p className="p-2">Sun: Closed</p>
                <br />
                <div>
                  <h2 className="pb-4">COUNTRY</h2>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a country</option>
                    <option value="US">United States(USD $) </option>
                    <option value="CA">VietNam(VND đ) </option>
                  </select>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </footer>
  );
}
