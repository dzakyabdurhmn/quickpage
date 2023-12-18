type IconProps = React.HTMLAttributes<SVGElement>;

export const Button = {
  black: (props: IconProps) => (
    <>
      <a
        href="#_"
        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
      >
        Get started
      </a>
    </>
  ),
  white: (props: IconProps) => (
    <>
      <a
        href="#_"
        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 bg-gray-100 rounded-lg hover:bg-gray-200 focus:shadow-outline focus:outline-none bordern border-neutral-900 outline outline-black outline-2"
      >
        Button Text
      </a>
    </>
  ),
  blacksm: (props: IconProps) => (
    <>
      <a
        href="#_"
        className="inline-flex items-center justify-center h-10 px-3 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-xl hover:bg-gray-800 focus:shadow-outline focus:outline-none text-sm"
      >
        Getstarted
      </a>
    </>
  ),
  whitesmt: (props: IconProps) => (
    <>
      <a
        href="#_"
        className="inline-flex items-center justify-center h-10 px-3  font-medium tracking-wide text-black transition duration-200 rounded-xl hover:bg-gray-100 focus:shadow-outline focus:outline-none bordern   outline-2"
      >
        ButtonText
      </a>
    </>
  ),
};
