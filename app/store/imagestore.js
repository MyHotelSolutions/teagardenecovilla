export const useImageStore = defineStore('image', () => {
  const winetable = ref([
    'TeaGardenEcovillas/Wine%20table/DSC00640.jpg?updatedAt=1765251917302',
    'TeaGardenEcovillas/Wine%20table/DSC00643.JPG?updatedAt=1765251912943',
    'TeaGardenEcovillas/Wine%20table/DSC00646.JPG?updatedAt=1765251912804',
    'TeaGardenEcovillas/Wine%20table/DSC00645.JPG?updatedAt=1765251912781',
  ])
  const restaurant = ref([
    'TeaGardenEcovillas/Restaurant_/DSC00410.jpg?updatedAt=1765251875755',
    'TeaGardenEcovillas/Restaurant_/DSC00271.jpg?updatedAt=1765251875566',
    'TeaGardenEcovillas/Restaurant_/DSC00391.jpg?updatedAt=1765251875376',
    'TeaGardenEcovillas/Restaurant_/DSC00403.jpg?updatedAt=1765251874954',
    'TeaGardenEcovillas/Restaurant_/DSC00390.jpg?updatedAt=1765251874840',
    'TeaGardenEcovillas/Restaurant_/DSC00397.jpg?updatedAt=1765251874420',
    'TeaGardenEcovillas/Restaurant_/DSC00577.jpg?updatedAt=1765251873169',
    'TeaGardenEcovillas/Restaurant_/DSC00388.jpg?updatedAt=1765251871239',
    'TeaGardenEcovillas/Restaurant_/DSC00275.jpg?updatedAt=1765251869754',
    'TeaGardenEcovillas/Restaurant_/DSC00274.jpg?updatedAt=1765251868649',
    'TeaGardenEcovillas/Restaurant_/DSC00578.jpg?updatedAt=1765251867838',
    'TeaGardenEcovillas/Restaurant_/DSC00263.jpg?updatedAt=1765251862798',
  ])
  const pool = ref([
    'TeaGardenEcovillas/Pool/DSC00700.jpg?updatedAt=1765251798970',
    'TeaGardenEcovillas/Pool/DSC00383.jpg?updatedAt=1765251798949',
    'TeaGardenEcovillas/Pool/DSC00414.jpg?updatedAt=1765251798421',
    'TeaGardenEcovillas/Pool/DSC00199.jpg?updatedAt=1765251798420',
    'TeaGardenEcovillas/Pool/DSC00415.jpg?updatedAt=1765251798196',
    'TeaGardenEcovillas/Pool/DSC00413.jpg?updatedAt=1765251796582',
    'TeaGardenEcovillas/Pool/DSC00240.jpg?updatedAt=1765251794573',
    'TeaGardenEcovillas/Pool/DSC00244.jpg?updatedAt=1765251793745',
    'TeaGardenEcovillas/Accomodation%20view/DSC00160.jpg?updatedAt=1765251352136telSolutions/TeaGardenEcovillas/Pool/DSC00400.jpg?updatedAt=1765251793720',
    'TeaGardenEcovillas/Pool/DSC00198.jpg?updatedAt=1765251792593',
    'TeaGardenEcovillas/Pool/DSC00267.jpg?updatedAt=1765251791234',
    'TeaGardenEcovillas/Pool/DSC00269.jpg?updatedAt=1765251790049',
    'TeaGardenEcovillas/Pool/DSC00436.jpg?updatedAt=1765251789661'
  ])
  const insiderooms = ref([
    'TeaGardenEcovillas/Inside%20room/DSC00466.jpg?updatedAt=1765251705759',
    'TeaGardenEcovillas/Inside%20room/DSC00666.jpg?updatedAt=1765251705743',
    'TeaGardenEcovillas/Inside%20room/DSC00687.jpg?updatedAt=1765251705019',
    'TeaGardenEcovillas/Inside%20room/DSC00477.jpg?updatedAt=1765251704976',
    'TeaGardenEcovillas/Inside%20room/DSC00472.jpg?updatedAt=1765251704917',
    'TeaGardenEcovillas/Inside%20room/DSC00478.jpg?updatedAt=1765251704493',
    'TeaGardenEcovillas/Inside%20room/DSC00662.jpg?updatedAt=1765251704195',
    'TeaGardenEcovillas/Inside%20room/DSC00470.jpg?updatedAt=1765251703768',
    'TeaGardenEcovillas/Inside%20room/DSC00649.jpg?updatedAt=1765251703798',
    'TeaGardenEcovillas/Inside%20room/DSC00680.jpg?updatedAt=1765251703606',
    'TeaGardenEcovillas/Inside%20room/DSC00691.jpg?updatedAt=1765251702416',
    'TeaGardenEcovillas/Inside%20room/DSC00468.jpg?updatedAt=1765251701582',
    'TeaGardenEcovillas/Inside%20room/DSC00681.jpg?updatedAt=1765251701570',
    'TeaGardenEcovillas/Inside%20room/DSC00692.jpg?updatedAt=1765251701137',
    'TeaGardenEcovillas/Inside%20room/DSC00684.jpg?updatedAt=1765251701107',
    'TeaGardenEcovillas/Inside%20room/DSC00672.jpg?updatedAt=1765251700978',
    'TeaGardenEcovillas/Inside%20room/DSC00686.jpg?updatedAt=1765251697741',
    'TeaGardenEcovillas/Inside%20room/DSC00479.jpg?updatedAt=1765251686179',
  ])
  const garden = ref([
    'TeaGardenEcovillas/Garden/DSC00737.jpg?updatedAt=1765251638589',
    'TeaGardenEcovillas/Garden/DSC00394.jpg?updatedAt=1765251637251',
    'TeaGardenEcovillas/Garden/DSC00569.jpg?updatedAt=1765251636299',
    'TeaGardenEcovillas/Garden/DSC00701.jpg?updatedAt=1765251636162',
    'TeaGardenEcovillas/Garden/DSC00382.jpg?updatedAt=1765251636522',
    'TeaGardenEcovillas/Garden/DSC00139.jpg?updatedAt=1765251635885',
    'TeaGardenEcovillas/Garden/DSC00399.jpg?updatedAt=1765251635346',
    'TeaGardenEcovillas/Garden/DSC00399.jpg?updatedAt=1765251635346',
    'TeaGardenEcovillas/Garden/DSC00399.jpg?updatedAt=1765251635346',
    'TeaGardenEcovillas/Garden/DSC00397.jpg?updatedAt=1765251634790',
    'TeaGardenEcovillas/Garden/DSC00417.jpg?updatedAt=1765251633486',
    'TeaGardenEcovillas/Garden/DSC00570.jpg?updatedAt=1765251632836',
    'TeaGardenEcovillas/Garden/DSC00148.jpg?updatedAt=1765251631621',
    'TeaGardenEcovillas/Garden/DSC00178.jpg?updatedAt=1765251631205',
    'TeaGardenEcovillas/Garden/DSC00574.jpg?updatedAt=1765251630757',
    'TeaGardenEcovillas/Garden/DSC00571.jpg?updatedAt=1765251628905',
    'TeaGardenEcovillas/Garden/DSC00581.jpg?updatedAt=1765251625200',
    'TeaGardenEcovillas/Garden/DSC00236.jpg?updatedAt=1765251609200',
    'TeaGardenEcovillas/Garden/WhatsApp%20Image%202025-11-08%20at%2022.21.03_b014c591.jpg?updatedAt=1765251592395',
  ])
  const dinner = ref([
    'TeaGardenEcovillas/Dinner/DSC00637.jpg?updatedAt=1765251542272',
    'TeaGardenEcovillas/Dinner/DSC00636.jpg?updatedAt=1765251542359',
    'TeaGardenEcovillas/Dinner/DSC00321.jpg?updatedAt=1765251542171',
    'TeaGardenEcovillas/Dinner/DSC00618.jpg?updatedAt=1765251542439',
    'TeaGardenEcovillas/Dinner/DSC00619.jpg?updatedAt=1765251541350',
    'TeaGardenEcovillas/Dinner/DSC00621.jpg?updatedAt=1765251540489',
    'TeaGardenEcovillas/Dinner/DSC00272.jpg?updatedAt=1765251538013',
    'TeaGardenEcovillas/Dinner/DSC00272.jpg?updatedAt=1765251538013',
    'TeaGardenEcovillas/Dinner/DSC00622.JPG?updatedAt=1765251527273',
  ])
  const bbqandfire = ref([
    'TeaGardenEcovillas/BBQ%20&%20fire/_DSC0016.jpg?updatedAt=1765251486245',
    'TeaGardenEcovillas/BBQ%20&%20fire/_DSC0018.jpg?updatedAt=1765251485955',
    'TeaGardenEcovillas/BBQ%20&%20fire/DSC00299.jpg?updatedAt=1765251482556',
    'TeaGardenEcovillas/BBQ%20&%20fire/DSC00314.jpg?updatedAt=1765251477952',
    'TeaGardenEcovillas/BBQ%20&%20fire/DSC00314.jpg?updatedAt=1765251477952',
    'TeaGardenEcovillas/BBQ%20&%20fire/DSC00317.jpg?updatedAt=1765251475273',
    'TeaGardenEcovillas/BBQ%20&%20fire/DSC00318.jpg?updatedAt=1765251471021'
  ])
  const bathroomandfitting = ref([
    'TeaGardenEcovillas/Bathroom%20&%20fitting%20area/DSC00513.jpg?updatedAt=1765251427095',
    'TeaGardenEcovillas/Bathroom%20&%20fitting%20area/DSC00457.jpg?updatedAt=1765251426805',
    'TeaGardenEcovillas/Bathroom%20&%20fitting%20area/DSC00493.jpg?updatedAt=1765251426283',
    'TeaGardenEcovillas/Bathroom%20&%20fitting%20area/DSC00696.jpg?updatedAt=1765251426043',
    'TeaGardenEcovillas/Bathroom%20&%20fitting%20area/DSC00696.jpg?updatedAt=1765251426043',
    'TeaGardenEcovillas/Bathroom%20&%20fitting%20area/DSC00487.jpg?updatedAt=1765251425635',
    'TeaGardenEcovillas/Bathroom%20&%20fitting%20area/DSC00494.jpg?updatedAt=1765251425581',
    'TeaGardenEcovillas/Bathroom%20&%20fitting%20area/DSC00482.jpg?updatedAt=1765251425053',
    'TeaGardenEcovillas/Bathroom%20&%20fitting%20area/DSC00480_1.jpg?updatedAt=1765251423098',
    'TeaGardenEcovillas/Bathroom%20&%20fitting%20area/WhatsApp%20Image%202025-11-08%20at%2022.21.02_7690d068.jpg?updatedAt=1765251415548',
  ])
  const accomodationview = ref([
    'TeaGardenEcovillas/Accomodation%20view/DSC00148.jpg?updatedAt=1765251361953',
    'TeaGardenEcovillas/Accomodation%20view/DSC00135.jpg?updatedAt=1765251361902',
    'TeaGardenEcovillas/Accomodation%20view/DSC00153.jpg?updatedAt=1765251361149',
    'TeaGardenEcovillas/Accomodation%20view/DSC00586.jpg?updatedAt=1765251359638',
    'TeaGardenEcovillas/Accomodation%20view/DSC00587.jpg?updatedAt=1765251358539',
    'TeaGardenEcovillas/Accomodation%20view/DSC00154.jpg?updatedAt=1765251357983',
    'TeaGardenEcovillas/Accomodation%20view/DSC00158.jpg?updatedAt=1765251357457',
    'TeaGardenEcovillas/Accomodation%20view/DSC00580.jpg?updatedAt=1765251356780',
    'TeaGardenEcovillas/Accomodation%20view/DSC00583.jpg?updatedAt=1765251356513',
    'TeaGardenEcovillas/Accomodation%20view/DSC00162.jpg?updatedAt=1765251352818',
    'TeaGardenEcovillas/Accomodation%20view/DSC00247.jpg?updatedAt=1765251352754',
    'TeaGardenEcovillas/Accomodation%20view/DSC00160.jpg?updatedAt=1765251352136'
  ])
  const common = ref([
    'TeaGardenEcovillas/Common/thumb.jpg',
  ])
  const breakfast = ref([
    'TeaGardenEcovillas/Breakfast/DSC00717.jpg?updatedAt=1765692812638',
    'TeaGardenEcovillas/Breakfast/DSC00725.jpg?updatedAt=1765692812541',
    'TeaGardenEcovillas/Breakfast/DSC00708.jpg?updatedAt=1765692812367',
    'TeaGardenEcovillas/Breakfast/DSC00740.jpg?updatedAt=1765692812386',
    'TeaGardenEcovillas/Breakfast/DSC00444.jpg?updatedAt=1765692811776',
    'TeaGardenEcovillas/Breakfast/DSC00714.jpg?updatedAt=1765692811269',
    'TeaGardenEcovillas/Breakfast/DSC00458.jpg?updatedAt=1765692807877',
    'TeaGardenEcovillas/Breakfast/DSC00704.jpg?updatedAt=1765692807824',
    'TeaGardenEcovillas/Breakfast/WhatsApp%20Image%202025-11-08%20at%2021.51.58_3d4ad825.jpg?updatedAt=1765692798421',
  ])
  const lunch = ref([
    'TeaGardenEcovillas/Lunch/DSC00772.jpg?updatedAt=1765692870301',
    'TeaGardenEcovillas/Lunch/DSC00776%20cro-.jpg?updatedAt=1765692869316',
    'TeaGardenEcovillas/Lunch/DSC00750.jpg?updatedAt=1765692869168',
    'TeaGardenEcovillas/Lunch/DSC00766.jpg?updatedAt=1765692867403',
    'TeaGardenEcovillas/Lunch/DSC00778.jpg?updatedAt=1765692865574',
  ])
  const balconey = ref([
    'TeaGardenEcovillas/Balcony/DSC00173.jpg?updatedAt=1765692746570',
    'TeaGardenEcovillas/Balcony/DSC00170.jpg?updatedAt=1765692746561',
    'TeaGardenEcovillas/Balcony/DSC00699-2.jpg?updatedAt=1765692745315',
    'TeaGardenEcovillas/Balcony/DSC00465.jpg?updatedAt=1765692744802',
    'TeaGardenEcovillas/Balcony/DSC00687.jpg?updatedAt=1765692743949',
    'TeaGardenEcovillas/Balcony/DSC00697-2.jpg?updatedAt=1765692742568',
  ])
  
  return {winetable, restaurant, pool, insiderooms, garden, dinner, bbqandfire, bathroomandfitting, accomodationview, common, breakfast, lunch, balconey}
})