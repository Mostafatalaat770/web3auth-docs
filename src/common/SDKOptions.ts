export const reactJS = "React";
export const angular = "Angular";
export const vue = "Vue";
export const nextjs = "Next JS";
export const android = "Android";
export const ios = "iOS";
export const reactnative = "React Native";
export const rnbare = "React Native Bare";
export const rnexpo = "React Native Expo";
export const rnlist = [rnbare, rnexpo];
export const flutter = "Flutter";
export const unity = "Unity";
export const unreal = "Unreal";
export const nodejs = "Node.js";
export const weblist = [reactJS, angular, vue, nextjs];

export const pnp = "Plug and Play";
export const pnpwebmodal = "Plug and Play Web Modal SDK";
export const pnpwebnomodal = "Plug and Play Web No Modal SDK";
export const pnpandroid = "Plug and Play Android SDK";
export const pnpios = "Plug and Play iOS SDK";
export const pnprn = "Plug and Play React Native SDK";
export const pnpflutter = "Plug and Play Flutter SDK";
export const pnpunity = "Plug and Play Unity SDK";
export const pnpunreal = "Plug and Play Unreal SDK";
export const pnplist = [
  { label: "Web - Modal SDK", value: pnpwebmodal, platforms: [...weblist] },
  { label: "Web - No Modal SDK", value: pnpwebnomodal, platforms: [...weblist] },
  { label: "Android SDK", value: pnpandroid, platforms: [android] },
  { label: "iOS SDK", value: pnpios, platforms: [ios] },
  { label: "React Native SDK", value: pnprn, platforms: [...rnlist] },
  { label: "Flutter SDK", value: pnpflutter, platforms: [flutter] },
  { label: "Unity SDK", value: pnpunity, platforms: [unity] },
  { label: "Unreal SDK", value: pnpunreal, platforms: [unreal] },
];

export const corekit = "Core Kit";
export const tkeyjs = "tKey JS SDK";
export const singlefactorauth = "Single Factor Auth SDK";
export const corekitnodejs = "Node.js SDK";
export const corekitlist = [
  { label: "tKey JS SDK", value: tkeyjs, platforms: [...weblist, reactnative] },
  { label: "Single Factor Auth SDK", value: singlefactorauth, platforms: [...weblist] },
  { label: "Node.js SDK", value: corekitnodejs, platforms: [nodejs] },
];

const getWindowLocation = () => {
  if (typeof window !== "undefined") return window.location.href;
  return "http://localhost";
};

export const getOptionsfromURL = (): Record<string, string> => {
  const url = new URL(getWindowLocation());

  const urlOpts = {};
  url.searchParams.forEach((value, key) => {
    urlOpts[key] = value;
  });

  return { ...urlOpts };
};

export const setURLfromOptions = (opts: Record<string, string>): string => {
  const url = new URL(getWindowLocation());

  url.search = "";
  for (const [key, value] of Object.entries(opts)) url.searchParams.append(key, value);
  return url.toString();
};
