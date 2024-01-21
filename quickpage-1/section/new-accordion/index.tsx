"use client";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import General from "@/section/accordion-content/general";
import AI from "@/section/accordion-content/ai";
import Privacy from "@/section/accordion-content/privacy";
import Upcomming from "@/section/accordion-content/upcomming";

const TabsDemo = () => (
  <div
    className="mt-48  max-w-[1200px]   mx-auto  justify-between p-10" // Align tabs to the start
  >
    <h1 className="text-3xl font-bold text-gray-700">
      Frequently asked <br /> questions.
    </h1>
    <Tabs.Root
      className="flex  mt-10 space-x-[50px] justify-between " // Align tabs to the start
      defaultValue="tab1"
    >
      <div>
        <Tabs.List
          className="border-mauve6 min-w-[30px] flex flex-col gap-9"
          aria-label="Manage your account"
        >
          {/* Align triggers to the start using text-start */}
          <Tabs.Trigger
            className="text-start data-[state=active]:bg-gray-200 px-3 py-2 rounded-xl "
            value="tab1"
          >
            General
          </Tabs.Trigger>
          <Tabs.Trigger
            className="text-start data-[state=active]:bg-red-500 px-3 py-2 rounded-xl"
            value="tab2"
          >
            Privacy
          </Tabs.Trigger>
          <Tabs.Trigger
            className="text-start data-[state=active]:bg-red-500 px-3 py-2 rounded-xl "
            value="tab3"
          >
            Responsible AI
          </Tabs.Trigger>
          <Tabs.Trigger
            className="text-start data-[state=active]:bg-red-500 px-3 py-2 rounded-xl "
            value="tab4"
          >
            Upcoming features
          </Tabs.Trigger>
        </Tabs.List>
      </div>
      <div className="mb-10 max-w-[800px]">
        <Tabs.Content value="tab1">
          <h1 className="text-2xl font-bold text-gray-700">General</h1>
          <General />
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <h1 className="text-2xl font-bold text-gray-700">Privacy</h1>
          <Privacy />
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <h1 className="text-2xl font-bold text-gray-700">Responsible AI</h1>
          <AI />
        </Tabs.Content>
        <Tabs.Content value="tab4">
          <h1 className="text-2xl font-bold text-gray-700">
            Upcoming features
          </h1>
          <Upcomming />
        </Tabs.Content>
      </div>
    </Tabs.Root>
  </div>
);

export default TabsDemo;

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        " mt-px min-w-[5000px] overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10  outline-none border-none focus:outline-none focus:border-none active:outline-none active:border-none ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          "text-black min-w-[5000px]    group flex h-[120px] flex-1 cursor-default items-center justify-between  px-5 text-[15px] leading-none  outline-none  data-[state=closed]:rounded-b-[40px]  rounded-t-[40px] ",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <div className=" rounded-full px-3 py-3 panahX hidden md:block border-gray-400 border">
          {/* <Icons.Plus
            className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 text-5xl"
            aria-hidden
          /> */}
          icon
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        "text-mauve11 min-w-[5000px]   data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp  overflow-hidden text-[15px]    rounded-b-[40px] ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className={`py-[15px] mb-10 px-5`}>{children}</div>
    </Accordion.Content>
  )
);
