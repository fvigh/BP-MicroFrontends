export interface Restaurant {
    id: number;
    name: string;
    pricerange: string;
    description: string;
    image: string;
    delivery_estimate: number;
    rating: number;
    menu: Array<Menu>; 
}

export interface Menu {

    id: number;
    item: string;
    price: number;
    image: string;
}
export const restaurants: Restaurant[] = [
    {
        id: 1,
        name: 'SOHO Laurinská',
        pricerange: '€€',
        description: 'Moderná ájizjská kuchyňa',
        image: 'https://static-bpmf.herokuapp.com/1.jpg',
        delivery_estimate: 25,
        rating: 9.4,
        menu: [
            { id: 1, item: 'Kokosová polievka s kuracím mäsom', price: 9.9, image: 'https://static-bpmf.herokuapp.com/37210772-0e65-11eb-8139-0af18cffcf0f_2._kokosov__polievka_s_kurac_m_m_som_.jpeg' },
            { id: 2, item: 'Udon rezance s hovädzím mäsom a badiánovou omáčkou', price: 12, image: 'https://static-bpmf.herokuapp.com/64bd9468-0ebd-11eb-85c9-8636db9c5bca_3._udon_rezance_s_hov_dz_m_m_som_a_badi_novou_om__kou.jpeg' },
            { id: 3, item: 'Ryžové rezance s kuracím mäsom a arašídovou omáčkou', price: 11, image: 'https://static-bpmf.herokuapp.com/460d3b02-0e65-11eb-8964-02a455eea37d_3._ry_ov__rezance_s_kurac_m_m_som_a_ara_idovou_om__kou.jpeg' },
            { id: 4, item: 'Kari s kuracím mäsom, sušenou rajčinou a ryžou', price: 11, image: 'https://static-bpmf.herokuapp.com/88870b9a-0ebd-11eb-8e55-7ade5c007c55_5._kari_s_kurac_m_m_som__su_enou_raj_inou_a_ry_ou.jpeg' },
            { id: 5, item: 'Hovädzie so zelenými fazuľkami a chilli', price: 10, image: 'https://static-bpmf.herokuapp.com/a5b02d30-0e65-11eb-b1a3-0af18cffcf0f_10._hov_dzie_so_zelen_mi_fazu_kami_a_chilli.jpeg' },

        ],
    },
    {
        id: 2,
        name: 'Jasmin',
        pricerange: '€€€',
        description: 'Objavte kúsok ázie',
        image: 'https://static-bpmf.herokuapp.com/2.jpg',
        delivery_estimate: 35,
        rating: 9.4,
        menu: [
            { id: 6, item: 'Bento Garden', price: 8, image: 'https://static-bpmf.herokuapp.com/ff80c784-d33b-11eb-b13a-16e4bf46ec9c____.jpeg' },
            { id: 7, item: 'Poké Avocado', price: 8.9, image: 'https://static-bpmf.herokuapp.com/fda9d720-82b4-11eb-b27f-0acaf6e58631___.jpeg' },
            { id: 8, item: 'Poké salmon', price: 9.9, image: 'https://static-bpmf.herokuapp.com/2541827e-82b5-11eb-b8b9-16834a6b80a9____poke.jpeg' },
            { id: 9, item: 'Tofu na žltom kari s kokosovým mliekom 🌶', price: 7.9, image: 'https://static-bpmf.herokuapp.com/2b15ebbe-59fa-11ec-9a4a-8eb2494ca7a7_092a079e_33ef_4c1b_b674_f641f5cbf894.jpeg' },
            { id: 10, item: 'Ostrokyslá polievka 🌶', price: 3, image: 'https://static-bpmf.herokuapp.com/09541714-82cb-11eb-8cd1-1a041d067c7d_3490eee7_4d62_4e3d_be00_5ae0049b16e4.jpeg' },
        ],
    },
    {
        id: 3,
        name: 'KFC Aupark',
        pricerange: '€',
        description: 'Najlepšie kura',
        image: 'https://static-bpmf.herokuapp.com/3.jpg',
        delivery_estimate: 35,
        rating: 9.1,
        menu: [
            { id: 11, item: 'Hot & Crispy Box', price: 9, image: 'https://static-bpmf.herokuapp.com/1d73e66e-42ee-11ec-9c41-de40136c8855_hot_and_crispy_box.jpeg' },
            { id: 12, item: 'Qurrito Box', price: 9.30, image: 'https://static-bpmf.herokuapp.com/e1381d76-42db-11ec-9eb6-12fe95863be7_qurrito_box.jpeg' },
            { id: 13, item: 'The Original Deluxe Burger Box', price: 9.3, image: 'https://static-bpmf.herokuapp.com/58aac702-6cab-11ec-bd91-06c0498d6277_12941_17400___kfc_digi_banner_the_original_deluxe_burger_box.jpeg' },
            { id: 14, item: 'Mix & Match Bucket Hot Wings + Popcorn', price: 13.9, image: 'https://static-bpmf.herokuapp.com/2a47e634-96c2-11eb-b72e-a6565ff22219_1440x810px_40_chicken_popcorn__12_hot_wings_sides.jpeg' },
            { id: 15, item: 'Burger Mania', price: 19.9, image: 'https://static-bpmf.herokuapp.com/345537c8-42dc-11ec-9025-d63451a23b8b_burger_mania.jpeg' },
        ],
    },
    {
        id: 4,
        name: 'Bamboo SNP',
        pricerange: '€',
        description: 'Len tie najčerstvejšie suroviny',
        image: 'https://static-bpmf.herokuapp.com/4.jpg',
        delivery_estimate: 30,
        rating: 9.3,
        menu: [
            { id: 16, item: 'Pho', price: 7.4, image: 'https://static-bpmf.herokuapp.com/71f54312-11b7-11ec-bb1b-c6daa679b055_pho1.jpeg' },
            { id: 17, item: 'Bun Bo Nam Bo', price: 7.5, image: 'https://static-bpmf.herokuapp.com/dd01e11a-11b7-11ec-9f98-96fad30b0e56_bunbanambo.jpeg' },
            { id: 18, item: 'Pho Xao Fried rice noodles', price: 7.8, image: 'https://static-bpmf.herokuapp.com/a6360dfc-c28d-11ea-8bda-b2c3d7773f54_f_sao_rezance_s_kuracim.jpeg' },
            { id: 19, item: 'Bamboo Wok', price: 7.9, image: 'https://static-bpmf.herokuapp.com/7548e8aa-0a40-11ea-b8b3-0a5864601851_Bamboo_Wok.jpeg' },
            { id: 20, item: 'Nem cuon summers roll', price: 3.5, image: 'https://static-bpmf.herokuapp.com/2290363a-d008-11e9-99a6-0a58646a0319_Letne__rolky_s_krevetami.jpeg' },
        ],
    },
    {
        id: 5,
        name: 'Sushi Time',
        pricerange: '€€',
        description: 'Dobré sushi. Rýchlo',
        image: 'https://static-bpmf.herokuapp.com/5.jpg',
        delivery_estimate: 35,
        rating: 9.2,
        menu: [
            { id: 21, item: 'Katsu Curry', price: 8.2, image: 'https://static-bpmf.herokuapp.com/a20aa67a-6cc3-11ec-be17-46881af80a1e_katsu_curry_jpg.jpeg' },
            { id: 22, item: 'Veggie Tahini Poke Bowl', price: 7.79, image: 'https://static-bpmf.herokuapp.com/0516e3ae-347c-11eb-87af-86ea1a560a77_veggie_poke__.jpeg' },
            { id: 23, item: 'Chicken Gyoza', price: 6, image: 'https://static-bpmf.herokuapp.com/89e13adc-a9a5-11eb-8369-f67e233ac5b8_gyoza_wolt.jpeg' },
            { id: 24, item: 'Miso', price: 2, image: 'https://static-bpmf.herokuapp.com/253fc722-d3bb-11e9-80fc-0a586467900c_soups_miso.jpeg' },
            { id: 25, item: 'Big Box', price: 36, image: 'https://static-bpmf.herokuapp.com/8b1d51ba-347a-11eb-a920-52117fe45ae2_box_big.jpeg' },
        ],
    },
    {
        id: 6,
        name: 'Bistro Suvlaki',
        pricerange: '€€',
        description: 'Pravá grécka kuchyňa',
        image: 'https://static-bpmf.herokuapp.com/6.jpg',
        delivery_estimate: 25,
        rating: 9.4,
        menu: [
            { id: 26, item: 'Suvlaki kuracie porcia 3ks', price: 6, image: 'https://static-bpmf.herokuapp.com/10324e4e-6d1d-11ea-a5b1-0a58647f863c_suvlaki_kuracie.jpeg' },
            { id: 27, item: 'Suvlaki bravčové porcia 3ks', price: 6, image: 'https://static-bpmf.herokuapp.com/1e664254-6d1d-11ea-a596-0a58647e068d_suvlaki_bravcove.jpeg' },
            { id: 28, item: 'Kalamáre vyprážané', price: 6, image: 'https://static-bpmf.herokuapp.com/cc70a098-6d1c-11ea-bc87-0a58647fab09_grilovane_kalamare.jpeg' },
            { id: 29, item: 'Melitzana psiti', price: 4.1, image: 'https://static-bpmf.herokuapp.com/e83532fe-0159-11eb-a15a-420ae7624992_pbaklazan_s_cesnakom_a_syrom.jpeg' },
            { id: 30, item: 'Syr Halloumi', price: 4.2, image: 'https://static-bpmf.herokuapp.com/2f1eba9a-6d1d-11ea-8952-0a58647fad03_halumi.jpeg' },
        ],
    },
    {
        id: 7,
        name: 'U Taliana',
        pricerange: '€',
        description: 'Talianska kuchyňa',
        image: 'https://static-bpmf.herokuapp.com/7.jpg',
        delivery_estimate: 40,
        rating: 9.4,
        menu: [
            { id: 31, item: 'Bruschetta con Pomodorini e Grana', price: 9, image: 'https://static-bpmf.herokuapp.com/14599f8c-5c26-11ec-aeaf-6e609acec8f1_untitled_catalog4680.jpeg' },
            { id: 32, item: 'Zuppa di pomodoro con grana e basilico', price: 4.5, image: 'https://static-bpmf.herokuapp.com/77f0fa3a-5c27-11ec-8e66-561054f1988d_paradajkova_polievka.jpeg' },
            { id: 33, item: 'Spaghetti alla Carbonara', price: 11, image: 'https://static-bpmf.herokuapp.com/0313d590-5103-11ec-821e-fa83c1fe6dc4_carbonara.jpeg' },
            { id: 34, item: 'Lasagne al Forno', price: 13, image: 'https://static-bpmf.herokuapp.com/4451664e-5103-11ec-a129-62439fe9d306_lasagne_al_forno.jpeg' },
            { id: 35, item: 'Pollo supreme con Verdure e Patate al Forno', price: 24, image: 'https://static-bpmf.herokuapp.com/a559f0fa-5c25-11ec-a5c9-322ee1ca27cb_untitled_catalog4673.jpeg' },
        ],
    },
    {
        id: 8,
        name: 'Bok simply asian',
        pricerange: '€',
        description: 'Gastronómia plná farieb',
        image: 'https://static-bpmf.herokuapp.com/8.jpg',
        delivery_estimate: 20,
        rating: 9.1,
        menu: [
            { id: 36, item: 'Tom kha gai', price: 3.3, image: 'https://static-bpmf.herokuapp.com/3df5bf68-aaa4-11ea-acce-0a58646abfb5_20200609_174349.jpeg' },
            { id: 37, item: 'Chicken meat in coconut milk', price: 7.7, image: 'https://static-bpmf.herokuapp.com/04240c12-aaa5-11ea-804d-0a58647afb08_img_20200609_195833_891.jpeg' },
            { id: 38, item: 'Crispy duck in peanut sauce', price: 9, image: 'https://static-bpmf.herokuapp.com/f6ae3138-aaa5-11ea-b533-0a58647aca15_20200609_180455.jpeg' },
            { id: 39, item: 'Fried rice noodles with vegetables', price: 5.6, image: 'https://static-bpmf.herokuapp.com/f9c70f20-78f9-11eb-b1b8-0a477267eede_c1_.jpeg' },
            { id: 40, item: 'Las Vegas maki', price: 11.4, image: 'https://static-bpmf.herokuapp.com/1bcb7bec-a4de-11ea-b7ee-0a5864782706_20200602_163218.jpeg' },
        ],
    },
    {
        id: 9,
        name: 'Foodstock',
        pricerange: '€',
        description: 'GOOD MOOD FOOD',
        image: 'https://static-bpmf.herokuapp.com/9.jpg',
        delivery_estimate: 25,
        rating: 9.6,
        menu: [
            { id: 41, item: 'Gyoza Menu', price: 8.4, image: 'https://static-bpmf.herokuapp.com/f15b760c-e5e6-11e9-830b-0a586460f638_Gyoza_Menu.jpeg' },
            { id: 42, item: 'Green Hummus', price: 4, image: 'https://static-bpmf.herokuapp.com/5ee97566-cff8-11e9-b819-0a586469fc17_Hraskovy_hummus.jpeg' },
            { id: 43, item: 'Yellow Hummus', price: 4, image: 'https://static-bpmf.herokuapp.com/69b44cd2-cff8-11e9-b3e5-0a586469fd1e_Kukuricny_hummus.jpeg' },
            { id: 44, item: 'Classic Hummus', price: 4, image: 'https://static-bpmf.herokuapp.com/7371f918-cff8-11e9-9ae1-0a5864688cc5_Hummus_Klasik.jpeg' },
            { id: 45, item: 'Vegeklobása', price: 5, image: 'https://static-bpmf.herokuapp.com/b6157af2-4886-11ec-8207-76364faf2e35_vegeklobasa.jpeg' },
        ],
    },
    {
        id: 10,
        name: 'Chutney indian restaurant',
        pricerange: '€',
        description: 'Naj chutneyšia India',
        image: 'https://static-bpmf.herokuapp.com/10.jpg',
        delivery_estimate: 35,
        rating: 8.9,
        menu: [
            { id: 46, item: 'Chicken tikka masala', price: 9, image: 'https://static-bpmf.herokuapp.com/b93569c8-706d-11eb-969d-c645e61dd97a_p_chicken_tikka_masala.jpeg' },
            { id: 47, item: 'Palak paneer', price: 8, image: 'https://static-bpmf.herokuapp.com/842891e6-706e-11eb-99be-d20b7de16b4b_p_palak_paneer.jpeg' },
            { id: 48, item: 'Daal soup', price: 3, image: 'https://static-bpmf.herokuapp.com/14b5daae-706d-11eb-b06e-027a3ce08f9b_p_dal_soup.jpeg' },
            { id: 49, item: 'Butter chicken', price: 8, image: 'https://static-bpmf.herokuapp.com/c5afa71e-706c-11eb-8fa5-c645e61dd97a_p_butter_chicken.jpeg' },
            { id: 50, item: 'Chicken biryani', price: 9.4, image: 'https://static-bpmf.herokuapp.com/6e5f4cde-706d-11eb-8dae-96b0e82ac055_p_chicken_biryani.jpeg' },
            { id: 51, item: 'Lamb saag', price: 11, image: 'https://static-bpmf.herokuapp.com/fa6bc3b0-706d-11eb-ab7c-6e4b4e19341b_p_lamb_saag.jpeg' },
        ],
    },

]

export default restaurants;