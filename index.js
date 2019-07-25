// const puppeteer = require('puppeteer');
const axios = require('axios');

const randomProfileList = [
  {
    id: 1,
    first_name: 'Randal',
    last_name: 'Del Checolo',
    email: 'rdelchecolo0@blogspot.com',
    gender: 'Male',
    ip_address: '61.43.10.133'
  },
  {
    id: 2,
    first_name: 'Cortie',
    last_name: 'Yesinov',
    email: 'cyesinov1@soundcloud.com',
    gender: 'Male',
    ip_address: '54.19.160.183'
  },
  {
    id: 3,
    first_name: 'Bear',
    last_name: 'Prew',
    email: 'bprew2@comsenz.com',
    gender: 'Male',
    ip_address: '156.170.206.195'
  },
  {
    id: 4,
    first_name: 'Kristofer',
    last_name: 'Tuttle',
    email: 'ktuttle3@nytimes.com',
    gender: 'Male',
    ip_address: '75.147.218.110'
  },
  {
    id: 5,
    first_name: 'Brenna',
    last_name: 'Jacquet',
    email: 'bjacquet4@hibu.com',
    gender: 'Female',
    ip_address: '182.93.86.51'
  },
  {
    id: 6,
    first_name: 'Eliot',
    last_name: 'Merrin',
    email: 'emerrin5@arstechnica.com',
    gender: 'Male',
    ip_address: '224.136.212.68'
  },
  {
    id: 7,
    first_name: 'Latrena',
    last_name: 'Terzo',
    email: 'lterzo6@va.gov',
    gender: 'Female',
    ip_address: '65.194.211.162'
  },
  {
    id: 8,
    first_name: 'Geraldine',
    last_name: 'Croyser',
    email: 'gcroyser7@bbb.org',
    gender: 'Female',
    ip_address: '117.189.215.81'
  },
  {
    id: 9,
    first_name: 'Raquela',
    last_name: 'Sigert',
    email: 'rsigert8@studiopress.com',
    gender: 'Female',
    ip_address: '167.153.99.212'
  },
  {
    id: 10,
    first_name: 'Miller',
    last_name: 'Barnewell',
    email: 'mbarnewell9@dedecms.com',
    gender: 'Male',
    ip_address: '228.159.159.81'
  },
  {
    id: 11,
    first_name: 'Babara',
    last_name: 'De Bruin',
    email: 'bdebruina@webs.com',
    gender: 'Female',
    ip_address: '202.72.52.131'
  },
  {
    id: 12,
    first_name: 'Alexa',
    last_name: 'Charon',
    email: 'acharonb@newyorker.com',
    gender: 'Female',
    ip_address: '32.121.186.11'
  },
  {
    id: 13,
    first_name: 'Nickey',
    last_name: 'Guslon',
    email: 'nguslonc@boston.com',
    gender: 'Male',
    ip_address: '210.7.2.244'
  },
  {
    id: 14,
    first_name: 'Charlotta',
    last_name: 'Binner',
    email: 'cbinnerd@japanpost.jp',
    gender: 'Female',
    ip_address: '245.131.77.53'
  },
  {
    id: 15,
    first_name: 'Gavan',
    last_name: 'Chandlar',
    email: 'gchandlare@ihg.com',
    gender: 'Male',
    ip_address: '162.29.65.16'
  },
  {
    id: 16,
    first_name: 'Edith',
    last_name: 'Emloch',
    email: 'eemlochf@booking.com',
    gender: 'Female',
    ip_address: '67.206.8.20'
  },
  {
    id: 17,
    first_name: 'Tobin',
    last_name: 'Springell',
    email: 'tspringellg@gravatar.com',
    gender: 'Male',
    ip_address: '0.41.45.107'
  },
  {
    id: 18,
    first_name: 'Karlee',
    last_name: 'Fitzsimmons',
    email: 'kfitzsimmonsh@blogtalkradio.com',
    gender: 'Female',
    ip_address: '190.134.160.66'
  },
  {
    id: 19,
    first_name: 'Leisha',
    last_name: 'MacGaughey',
    email: 'lmacgaugheyi@ebay.co.uk',
    gender: 'Female',
    ip_address: '187.20.152.182'
  },
  {
    id: 20,
    first_name: 'Brinna',
    last_name: 'Pursey',
    email: 'bpurseyj@senate.gov',
    gender: 'Female',
    ip_address: '174.202.84.92'
  }
];

const apiRequest = async (url, listArray) => {
  const params = {
    name: `${listArray.first_name} ${listArray.last_name}`,
    browser: 'mimic',
    os: 'win',
    network: {
      proxy: {
        type: 'HTTP',
        host: listArray.ip,
        // port: listArray.port,
        // username: listArray.username,
        // password: listArray.password
      }
    }
  };

  const headers = {
    'Content-Type': 'application/json',
    'token': 'JWT fefege...' 
  }

  let response = await axios.post(url, params, {headers: headers});
  console.log('%c Log here:','background: #2C2C2C; color: green;', response);
  return response;
};

const createProfile = async () => {
  const baseUrl = 'https://api.multiloginapp.com/v2';
  const profileCreate = '/profile';

  for (const element of randomProfileList) {
    await apiRequest(baseUrl + profileCreate, element);
  }
  console.log('%c Log here:','background: #2C2C2C; color: #18C828;', 'done');


};

createProfile();
