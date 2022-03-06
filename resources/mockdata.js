// sample data to be rendered for components

const interactionProps = {
  title: "Create &amp; Sell Your NFT's",
  subtitle: "A play of delight and shade, chairoscuro is the realm between the light and dark",
  items: [
    {
      title: "Set up your wallet",
      description: "Once you've set up your wallet of choice, connect it to OpenSea. Learn about <span className='text-blue-500'>wallets we support</span>",
    },
    {
      title: "Create your collection",
      description: "Click <span className='text-blue-500'>My Collections</span> and set up your collection. Add social links, a description, profile &amp; banner images, and a secondary",
    },
    {
      title: "Add your NFT'S",
      description: "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs stats, and unlockable content.",
    },
    {
      title: "List  them  for  sale",
      description: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs.",
    },
  ],
  settings: {
    width: "16em",
    border: true,
  },
}

const trendingItems = {
    title: "Trending in All Categories",
    subtitle: "A play of light and shade, chairoscuro is the realm between the light and dark",
    items: [
      {
        title: "FriYaywiz",
        description: "A play of light and shade, chairoscuro is the realm between the light and dark",
        image: "/assets/images/sample-image-1.png",
        icon: "/assets/images/user-image-1.png"
      },
      {
        title: "Pixelwizards",
        description: "A play of light and shade, chairoscuro is the realm between the light and dark",
        image: "/assets/images/sample-image-2.png",
        icon: "/assets/images/user-image-2.png"
      },
      {
        title: "Aesthetic'smatter",
        description: "A play of light and shade, chairoscuro is the realm between the light and dark",
        image: "/assets/images/sample-image-3.png",
        icon: "/assets/images/user-image-3.png"
      }
    ],
    settings: {
      width: "18em"
    },
  }

const faqsData = {
  header: "We will try to help you if you are confused.",
  description: "A frequently asked question (FAQ) forum is often used in articles, websites, email lists, and online forums where commo questions tend to recur.",
  items: [
    {
      title: "How do I create an NFT?",
      content: `From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.`,
    },
    {
      title: "How do I create and sell NFTs on Polygon?",
      content: `Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt 
                      ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      title: "What is Freezing Metadata",
      content: `Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt 
                      ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      title: "Does Opensea allow physical item trades?",
      content: `Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt 
                      ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat.`,
    },
    {
      title: "How do I add a collection collaborator?",
      content: `Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt 
                      ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat.`,
    },
  ],
}

const footerData = {
    brand: {
        logo: "/assets/icons/app-logo.svg",
        name: "OpenSea",
        description: "From Opensea.io, go to your profile icon and click \"Create\" in the top right corner. You'll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description"
    },
    navigation: [
        {
            name: "Resources",
            links: [
                {
                    label: "Help Center"
                },
                {
                    label: "Platform Status"
                },
                {
                    label: "Partners"
                },
                {
                    label: "Gas-Free Marketplace"
                },
                {
                    label: "Suggestions"
                },
                {
                    label: "Discord Commmunity"
                },
                {
                    label: "Newslettere"
                },
                {
                    label: "Blog"
                },
                {
                    label: "Docs"
                }
            ]
        },
        {
            name: "My Account",
            links: [
                {
                    label: "Profile"
                },
                {
                    label: "Favourites"
                },
                {
                    label: "My Collections"
                },
                {
                    label: "Settings"
                }
            ]
        },
        {
            name: "Stats",
            links: [
                {
                    label: "Rankings"
                },
                {
                    label: "Activity"
                }
            ]
        },
        {
            name: "Company",
            links: [
                {
                    label: "About"
                },
                {
                    label: "Careers"
                }
            ]
        }
    ]
    
}

export { interactionProps, faqsData, footerData, trendingItems }
