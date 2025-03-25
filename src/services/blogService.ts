
// Define the blog data structure
export interface BlogData {
  title: string;
  date: string;
  description: string;
  content: string;
  mainImage1: string;
  mainImage2: string;
  mainImage3: string;
  quoteText: string;
  quoteAuthor: string;
  quoteTitle: string;
  quoteImage: string;
  calloutTitle: string;
  calloutContent: string;
}

// Get blog data from localStorage or return default values
export const getBlogData = (): BlogData => {
  const storedData = localStorage.getItem('blogData');
  
  if (storedData) {
    return JSON.parse(storedData) as BlogData;
  }
  
  // Default values if nothing is in localStorage
  return {
    title: "A conversation with Maker & Co.",
    date: "Published 13 Jan 2025",
    description: "Maker & Co. are one of our favorite upcoming interior design studios. We caught up with Jules and Mia at their brand new studio to chat about all things design.",
    content: "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.\n\nEget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.",
    mainImage1: "https://cdn.builder.io/api/v1/image/assets/TEMP/316df20255e7790295fbe557962f2233a27bb506?placeholderIfAbsent=true",
    mainImage2: "https://cdn.builder.io/api/v1/image/assets/TEMP/31ee63fcfbbd116ba010b921f2f83a14be50aa35?placeholderIfAbsent=true",
    mainImage3: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a43d277787f7ad6b4ecac5e8c5bdf0bf86ae0f1?placeholderIfAbsent=true",
    quoteText: "In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.",
    quoteAuthor: "Olivia Rhye",
    quoteTitle: "Product Designer",
    quoteImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e63e082976685c4c270ac845a02384064787cea?placeholderIfAbsent=true",
    calloutTitle: "Heading text",
    calloutContent: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.\n\nNunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.",
  };
};

// Save blog data to localStorage
export const saveBlogData = (data: BlogData): void => {
  localStorage.setItem('blogData', JSON.stringify(data));
};
