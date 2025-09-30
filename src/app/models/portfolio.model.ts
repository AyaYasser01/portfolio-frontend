export  interface PortfolioData {
  _id?:string;
  name: string;
  title: string;
  description: string;
  img: string;
  links: {
    github: string;
    linkedin: string;
    cv: string;
  };
}
