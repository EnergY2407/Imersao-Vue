const store = {
  state: {
    products: [
      {
        id: 1,
        category: {
          name: 'GPU',
          image_url: [
            'https://thumbs.dreamstime.com/b/gpu-icon-trendy-gpu-logo-concept-white-background-hardw-gpu-icon-trendy-gpu-logo-concept-white-background-hardware-131145549.jpg',
          ],
        },
        brand: {
          name: 'Radeon',
          image_url: [
            'https://i.pinimg.com/originals/ea/be/15/eabe15e49d4f9f613a0734c2a0aba60f.png',
          ],
        },
        title: 'RX 570',
        desc: 'Placa de video fabricada pela AMD',
        price: 1399,
        count: 2,
        status: 'Active',
        images: [
          'https://static.doocacommerce.com.br/fgtec/product/placa-de-video-msi-amd-radeon-rx-570-4gb-gddr5-armor-oc-edition-rx-570-armor-4g-oc-1528469316466_1000x1000+fill_ffffff.png',
          'https://images0.kabum.com.br/produtos/fotos/88810/88810_1494958672_g.jpg',
        ],
      },
      {
        id: 2,
        category: {
          name: 'CPU',
          image_url: [
            'https://media.istockphoto.com/vectors/cpu-icon-vector-isolated-on-white-background-logo-concept-of-cpu-sign-vector-id1034612688',
          ],
        },
        brand: {
          name: 'Intel',
          image_url: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/800px-Intel_logo_%282006-2020%29.svg.png',
          ],
        },
        title: 'I5 9400F',
        desc: 'Processador fabricado pela INTEL',
        price: 1000,
        count: 10,
        status: 'Active',
        images: [
          'https://images3.kabum.com.br/produtos/fotos/99683/processador-intel-core-i5-9400f-coffee-lake-cache-9mb-2-9ghz-4-1ghz-max-turbo-lga-1151-bx80684i59400f_processador-intel-core-i5-9400f-coffee-lake-cache-9mb-2-9ghz-4-1ghz-max-turbo-lga-1151-bx80684i59400f_1564429485_g.jpg',
          'https://s2.glbimg.com/kIK6JXEGLeSJt13Mr4A0SSdwzms=/0x0:695x389/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/8/5/LVcbykRuie0gK3ffPYxA/word-image-12.jpg',
        ],
      },
      {
        id: 3,
        category: {
          name: 'RAM',
          image_url: [
            'data:image/png;base64,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',
          ],
        },
        brand: {
          name: 'Team-Group',
          image_url: [
            'https://www.teamgroupinc.com/en/upload/product_note_pic/bf5ef4ba48bcfa3167b6540222a15ce0.jpg',
          ],
        },
        title: '16gb T-Force',
        desc: 'Memoria ram 2 modulos 8gb',
        price: 400,
        count: 30,
        status: 'Active',
        images: [
          'https://media.pichau.com.br/media/catalog/product/cache/cbe28acd1bc262a6873f176949c5b990/t/l/tlred48g266hc15bdc01.jpg',
          'https://images-na.ssl-images-amazon.com/images/I/61sP6FWg9fL._AC_SY355_.jpg',
        ],
      },
      {
        id: 4,
        category: {
          name: 'SSD',
          image_url: [
            'https://cdn0.iconfinder.com/data/icons/computer-interface-glyph/128/1-17-512.png',
          ],
        },
        brand: {
          name: 'Crucial',
          image_url: [
            'https://content.crucial.com/content/dam/crucial/brand-assets/logos/crucial/web/crucial250.png',
          ],
        },
        title: 'BX500 240gb',
        desc: 'SSD fabricado pela crucial',
        price: 340,
        count: 100,
        status: 'Active',
        images: [
          'https://images4.kabum.com.br/produtos/fotos/98544/98544_1537969934_index_g.jpg',
          'https://netcomputadores.com.br/dbimg/produtos/ct480bx500ssd1_53063_m.jpg',
        ],
      },
      {
        id: 5,
        category: {
          name: 'PSU',
          image_url: [
            'https://cdn4.iconfinder.com/data/icons/hardware-line/512/psu-power-supply-computer-electricity-hardware-peripherals-512.png',
          ],
        },
        brand: {
          name: 'Corsair',
          image_url: [
            'https://logodownload.org/wp-content/uploads/2014/09/corsair-logo-1-1.png',
          ],
        },
        title: 'VS 500',
        desc: 'Fonte 500w fabricada pela corsair',
        price: 349,
        count: 1000,
        status: 'Active',
        images: [
          'https://img.terabyteshop.com.br/produto/g/fonte-corsair-vs500-cp-9020118-la-500w-80-plus-white-pfc-ativo_35357.png',
          'https://images4.kabum.com.br/produtos/fotos/114884/fonte-corsair-vs500-500w-80-plus-cp-9020223-ww_1595344417_g.jpg',
        ],
      },
      {
        id: 6,
        category: {
          name: 'GPU',
          image_url: [
            'https://thumbs.dreamstime.com/b/gpu-icon-trendy-gpu-logo-concept-white-background-hardw-gpu-icon-trendy-gpu-logo-concept-white-background-hardware-131145549.jpg',
          ],
        },
        brand: {
          name: 'Nvidia',
          image_url: ['https://cdn.worldvectorlogo.com/logos/nvidia.svg'],
        },
        title: 'GTX 1650',
        desc: 'Placa de video fabricada pela Nvidia',
        price: 1700,
        count: 5,
        status: 'Active',
        images: [
          'https://http2.mlstatic.com/D_NQ_NP_922821-MLA44250947371_122020-O.jpg',
          'https://images3.kabum.com.br/produtos/fotos/129973/placa-de-video-asus-nvidia-geforce-gtx-1650-4gb-gddr6-tuf-gtx1650-o4gd6-p-gaming_1603223330_g.jpg',
        ],
      },
      {
        id: 7,
        category: {
          name: 'CPU',
          image_url: [
            'https://media.istockphoto.com/vectors/cpu-icon-vector-isolated-on-white-background-logo-concept-of-cpu-sign-vector-id1034612688',
          ],
        },
        brand: {
          name: 'AMD',
          image_url: ['https://cdn.worldvectorlogo.com/logos/ryzen.svg'],
        },
        title: 'Ryzen 5 3600',
        desc: 'Processador fabricado pela AMD',
        price: 1499,
        count: 1,
        status: 'Active',
        images: [
          'https://cdn.awsli.com.br/600x700/771/771718/produto/48016440/14fda9a001.jpg',
          'https://http2.mlstatic.com/D_NQ_NP_638337-MLA42157659270_062020-O.jpg',
        ],
      },
      {
        id: 8,
        category: {
          name: 'CPU',
          image_url: [
            'https://media.istockphoto.com/vectors/cpu-icon-vector-isolated-on-white-background-logo-concept-of-cpu-sign-vector-id1034612688',
          ],
        },
        brand: {
          name: 'AMD',
          image_url: ['https://cdn.worldvectorlogo.com/logos/ryzen.svg'],
        },
        title: 'Ryzen 9 3900XT',
        desc: 'Processador fabricado pela AMD',
        price: 3399,
        count: 1,
        status: 'Active',
        images: [
          'https://static.doocacommerce.com.br/fgtec/product/processador-amd-ryzen-9-3900xt-4-7-ghz-70mb-cache-am4-100-100000277wof-1601381524442_1200x628+fill_ffffff.jpg',
          'https://www.amd.com/system/files/2020-06/ryzen-9-pib-left-facing-WOF-1260x709.png',
        ],
      },
      {
        id: 9,
        category: {
          name: 'RAM',
          image_url: [
            'data:image/png;base64,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',
          ],
        },
        brand: {
          name: 'Corsair',
          image_url: [
            'https://www.teamgroupinc.com/en/upload/product_note_pic/bf5ef4ba48bcfa3167b6540222a15ce0.jpg',
          ],
        },
        title: '16gb Corsair Vengeance RGB',
        desc: 'Memoria ram 2 modulos 8gb',
        price: 939,
        count: 40,
        status: 'Active',
        images: [
          'https://images-na.ssl-images-amazon.com/images/I/71Kkm5nIRKL._AC_SL1500_.jpg',
          'https://ddr4.com.br/wp-content/uploads/2020/10/Memoria-Ram-Vengeance-Pro-RGB-Corsair-de-8Gb-ate-32Gb-e-3000Mhz-ate-4000Mhz-DDR4-03.jpg',
        ],
      },
      {
        id: 10,
        category: {
          name: 'CPU',
          image_url: [
            'https://media.istockphoto.com/vectors/cpu-icon-vector-isolated-on-white-background-logo-concept-of-cpu-sign-vector-id1034612688',
          ],
        },
        brand: {
          name: 'Intel',
          image_url: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/800px-Intel_logo_%282006-2020%29.svg.png',
          ],
        },
        title: 'i9 9900k',
        desc: 'Processador top de linha fabricado pela Intel',
        price: 2899,
        count: 1,
        status: 'Active',
        images: [
          'https://images-na.ssl-images-amazon.com/images/I/61jXcMjtvUL._AC_SL1080_.jpg',
          'https://www.techinn.com/f/13743/137434570/intel-core-i9-9900k-3.6ghz.jpg',
        ],
      },
      {
        id: 11,
        category: {
          name: 'SSD M.2',
          image_url: [
            'https://previews.123rf.com/images/barbulat/barbulat1703/barbulat170300048/74267927-m-2-solid-state-drive.jpg',
          ],
        },
        brand: {
          name: 'Samsung',
          image_url: [
            'https://marcas-logos.net/wp-content/uploads/2020/02/Samsung-logo.png',
          ],
        },
        title: '970 Evo',
        desc: 'SSD M.2 fabricado pela Samsung',
        price: 890,
        count: 10,
        status: 'Active',
        images: [
          'https://images.samsung.com/is/image/samsung/au-970-evo-nvme-m2-ssd-mz-v7e250bw-frontblack-96168815?$720_576_PNG$',
          'https://images-na.ssl-images-amazon.com/images/I/91RKPgFy3CL._AC_SL1500_.jpg',
        ],
      },
      {
        id: 12,
        category: {
          name: 'COOLER',
          image_url: [
            'https://previews.123rf.com/images/barbulat/barbulat1604/barbulat160400092/55505098-cpu-cooler-shade-picture.jpg',
          ],
        },
        brand: {
          name: 'Noctua',
          image_url: [
            'https://external-preview.redd.it/hvkim6keqVPvi3HKZ6dIkVeJ8h5rszjARYl_fMRyWu8.png?auto=webp&s=fa5003677dbfaa5e95583a89ebe58a7a8b5f5185',
          ],
        },
        title: 'Noctua NH-D15',
        desc: 'Cooler fabricado pela Noctua',
        price: 950,
        count: 10,
        status: 'Active',
        images: [
          'https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=915331801',
          'https://waz.vteximg.com.br/arquivos/ids/191084-500-500/114360-1-Cooler_p_Processador_CPU_AM4_Noctua_NH_D15_SE_AM4_114360-5.jpg?v=636529651982800000',
        ],
      },
      {
        id: 13,
        category: {
          name: 'MOBO',
          image_url: [
            'data:image/png;base64,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',
          ],
        },
        brand: {
          name: 'ROG',
          image_url: [
            'https://i.pinimg.com/originals/26/87/bb/2687bba90482da6539ecd71f4d62bea3.png',
          ],
        },
        title: 'z390 ROG STRIX',
        desc: 'Placa mãe feita pela ROG',
        price: 1099,
        count: 1,
        status: 'Active',
        images: [
          'https://images-na.ssl-images-amazon.com/images/I/71u84lPOeXL._AC_SL1400_.jpg',
          'https://dlcdnwebimgs.asus.com/gain/D9AD60CB-326D-4FCD-896B-5666B159673A',
        ],
      },
      {
        id: 14,
        category: {
          name: 'GPU',
          image_url: [
            'https://thumbs.dreamstime.com/b/gpu-icon-trendy-gpu-logo-concept-white-background-hardw-gpu-icon-trendy-gpu-logo-concept-white-background-hardware-131145549.jpg',
          ],
        },
        brand: {
          name: 'Radeon',
          image_url: [
            'https://i.pinimg.com/originals/ea/be/15/eabe15e49d4f9f613a0734c2a0aba60f.png',
          ],
        },
        title: 'RX 6900XT',
        desc: 'Placa de video top de linha fabricada pela AMD',
        price: 14000,
        count: 2,
        status: 'Active',
        images: [
          'https://img.terabyteshop.com.br/archive/1659741334/1.png',
          'https://www.amd.com/system/files/2020-10/579976-radeon-rx-6000xt-left-angle-1260x709_0.png',
        ],
      },
      {
        id: 15,
        category: {
          name: 'PSU',
          image_url: [
            'https://cdn4.iconfinder.com/data/icons/hardware-line/512/psu-power-supply-computer-electricity-hardware-peripherals-512.png',
          ],
        },
        brand: {
          name: 'Superflower',
          image_url: [
            'https://www.store.pcimage.com.my/image/shoppcimage/image/data/Manufacturer/superflower.png',
          ],
        },
        title: 'Leadex Gold 750w',
        desc: 'Fonte feita pela Superflower',
        price: 1400,
        count: 6,
        status: 'Active',
        images: [
          'https://media.pichau.com.br/media/catalog/product/cache/cbe28acd1bc262a6873f176949c5b990/s/f/sf-750f14rg7_1.jpg',
          'https://www.vortez.net/news_file/16636_super-flower-leadex-3-gold.jpg',
        ],
      },
      {
        id: 16,
        category: {
          name: 'GPU',
          image_url: [
            'https://thumbs.dreamstime.com/b/gpu-icon-trendy-gpu-logo-concept-white-background-hardw-gpu-icon-trendy-gpu-logo-concept-white-background-hardware-131145549.jpg',
          ],
        },
        brand: {
          name: 'Nvidia',
          image_url: ['https://cdn.worldvectorlogo.com/logos/nvidia.svg'],
        },
        title: 'RTX 3090',
        desc: 'Placa de video top de linha fabricada pela Nvidia',
        price: 25000,
        count: 1,
        status: 'Active',
        images: [
          'https://storage.googleapis.com/file-computeandmore/images/ebfc2704-5a06-4b50-b674-b014ae7814e1.jpg',
          'https://images-na.ssl-images-amazon.com/images/I/81qaedQ45-L._AC_SL1500_.jpg',
        ],
      },
      {
        id: 16,
        category: {
          name: '',
          image_url:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1200px-Red_X.svg.png',
        },
        brand: {
          name: '',
          image_url:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1200px-Red_X.svg.png',
        },
      },
    ],
  },
};
