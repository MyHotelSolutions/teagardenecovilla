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

  const availableRooms = ref([])
  const selectedRooms = ref([])
  const roomDetails = ref(
    [
        {
            id : 0,
            side : 'left',
            image : 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/room/DSC00478%20(1).jpg',
            price : 16000,
            floor : 'down',
            count : 4,
            bedsize : 'Double quin size beds',
            name : 'Duplex Quadruple room',
            facility : [
                // 'lucide-lab:kettle-electric',
                'solar:hanger-2-bold',
                'guidance:showers',
                'ep:hot-water',
                // 'lucide-lab:chairs-table-platter',
                'guidance:no-smoking',
                'ic:outline-live-tv',
                'material-symbols:android-wifi-4-bar-rounded'
            ]
        },
        {
            id : 1,
            side : 'right',
            image : 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/room/DSC00478%20(1).jpg',
            price : 16000,
            floor : 'down',
            count : 0,
            bedsize : 'Double quin size beds',
            name : 'Duplex Quadruple room',
            facility : [
                // 'lucide-lab:kettle-electric',
                'solar:hanger-2-bold',
                'guidance:showers',
                'ep:hot-water',
                // 'lucide-lab:chairs-table-platter',
                'guidance:no-smoking',
                'ic:outline-live-tv',
                'material-symbols:android-wifi-4-bar-rounded'
            ]
        },
        {
            id : 2,
            side : 'left',
            image : 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/room/DSC00478%20(1).jpg',
            price : 16000,
            floor : 'first',
            count : 0,
            bedsize : 'Double quin size beds',
            name : 'Duplex Quadruple room',
            facility : [
                // 'lucide-lab:kettle-electric',
                'solar:hanger-2-bold',
                'guidance:showers',
                'ep:hot-water',
                // 'lucide-lab:chairs-table-platter',
                'guidance:no-smoking',
                'ic:outline-live-tv',
                'material-symbols:android-wifi-4-bar-rounded'
            ]
        },
        {
            id : 3,
            side : 'right',
            image : 'https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/room/DSC00478%20(1).jpg',
            price : 16000,
            floor : 'first',
            count : 0,
            bedsize : 'Double quin size beds',
            name : 'Duplex Quadruple room',
            facility : [
                // 'lucide-lab:kettle-electric',
                'solar:hanger-2-bold',
                'guidance:showers',
                'ep:hot-water',
                // 'lucide-lab:chairs-table-platter',
                'guidance:no-smoking',
                'ic:outline-live-tv',
                'material-symbols:android-wifi-4-bar-rounded'
            ]
        },
    ]
  )

  const personalData = ref(
    {
      firstName : '',
      lastName : '',
      mobile : ''
    }
  )
  const accountDetails = ref(
    {
      email : '',
      password : '',
      repassword : ''
    }
  )

  const cardDetails = ref(
    {
      cardNumber : '',
      cardName : '',
      expireDate : '',
      csv : ''
    }
  )
  const adultsCount = ref(2)
  const childCount = ref(0)
  const roomsCount = ref(1)
  const childAgeSelectedList = ref([])
  const modelValue = shallowRef({
    start: null,
    end: null
  })


  return { socialLinks, availableRooms, selectedRooms, roomDetails, personalData, accountDetails, cardDetails, adultsCount, childCount, roomsCount, childAgeSelectedList, modelValue }
})