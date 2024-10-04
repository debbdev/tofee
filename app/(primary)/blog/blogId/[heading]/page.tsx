"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { blogs } from "@/constants";
import Link from "next/link";

function Page() {
  const { heading } = useParams();
  const decodedHeading = decodeURIComponent(heading as string);
  const blog = blogs.find((blog) => blog.heading === decodedHeading);

  return (
    <section className="bg-neutral-200 pb-16 pt-32">
      <div className="mx-auto max-w-screen-sm px-10 sm:max-w-screen-sm lg:max-w-screen-xl">
        {blog ? (
          <>
            <div className="flex-between flex-wrap">
              <h4>
                <span>Our Blog </span>
                {blog.heading}
              </h4>
              <Link href="/blog">Back to Blog</Link>
            </div>
            <h2 className="h2-bold pb-10 pt-5 ">{blog.heading}</h2>
            <div className="mx-auto max-w-screen-sm px-6 sm:max-w-screen-sm sm:px-6 lg:max-w-screen-md lg:px-0">
              <Image
                src={blog.img}
                alt={blog.heading}
                width={1000}
                height={1000}
              />
              <div className="flex-between py-5">
                <span>Published {blog.time} ago</span>
                <span className="flex-between gap-2">
                  <Image
                    src="/assets/icons/facebook.svg"
                    width={20}
                    height={20}
                    alt="facebook icon"
                  />
                  <Image
                    src="/assets/icons/telegram.svg"
                    width={20}
                    height={20}
                    alt="telegram icon"
                  />
                  <Image
                    src="/assets/icons/instagram.svg"
                    width={20}
                    height={20}
                    alt="instagram icon"
                  />
                </span>
              </div>
              <p>{blog.blogText}</p>
            </div>
            <div className="mx-auto max-w-screen-sm pb-10 pt-12 sm:max-w-screen-sm lg:max-w-screen-2xl">
              <Link href="/">
                <button className="brand-gradient mx-auto flex rounded px-6 py-3 text-center text-white">
                  Buy your Energy Today
                </button>
              </Link>
              <Link href="/blog">
                <h5 className="font-medium">Previous</h5>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="h2-bold">Blog Post Not Found</h2>
            <p>
              We couldn`&apos;`t find the blog post you`&apos;`re looking for.
            </p>
            <Link href="/blog">Back to Blog</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Page;
