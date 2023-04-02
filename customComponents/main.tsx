import { Check } from "lucide-react";
import Image from "next/image";

export default function DisplayComponents() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full flex-col items-center">
        <h1 className="2xl:px-30 mb-4 flex flex-col items-center text-4xl font-black text-slate-900 dark:text-white md:text-6xl lg:mb-8 lg:text-center lg:leading-tight">
          <Image
            src="/static/logo.png"
            alt="React Appwrite Logo"
            width={100}
            height={100}
          />
          React Appwrite
        </h1>
        <p className="font-bold text-slate-600 dark:text-slate-100 lg:text-center lg:text-lg">
          Gorgeous library for integrating React with Appwrite.
        </p>
      </div>
      <div className="flex w-full flex-row items-center justify-center gap-2">
        <a href="https://www.npmjs.com/package/react-appwrite">
          <img
            alt="Latest npm version"
            src="https://img.shields.io/npm/v/react-appwrite?color=blue"
          />
        </a>
        <a href="https://github.com/sanny-io/react-appwrite/blob/main/LICENSE">
          <img
            alt="MIT license"
            src="https://img.shields.io/github/license/sanny-io/react-appwrite?color=success"
          />
        </a>
        <a href="https://github.com/sanny-io/react-appwrite/issues">
          <img
            alt="GitHub issues"
            src="https://img.shields.io/github/issues/sanny-io/react-appwrite"
          />
        </a>
      </div>
    </div>
  );
}
