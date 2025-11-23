export const useHotelStore = defineStore('hotel', () => {
  const socialLinks = [
    {
      name : 'facebook',
      icon : 'entypo-social:facebook',
      link : 'https://web.facebook.com/p/Tea-Garden-Eco-Villas-100039268366174/?_rdc=1&_rdr'
    },
    {
      name : 'instagram',
      icon : 'entypo-social:instagram',
      link : 'https://www.instagram.com/tea_garden_eco_villas/?hl=en'
    },
    {
      name : 'tiktok',
      icon : 'entypo-social:rdio-with-circle',
      link : 'https://www.tiktok.com/@sandalu_/video/7533202326304165128'
    },
  ]

  return { socialLinks }
})