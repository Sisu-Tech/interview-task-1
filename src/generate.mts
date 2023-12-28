import { random, sample, shuffle, times } from 'lodash-es';

import { User, UserTransaction } from './types.mjs';

export const users: User[] = [
    {
        id: 'v4n9gprx',
        username: 'Alvina78',
    },
    {
        id: 'v8q2husp',
        username: 'Kara_Stanton',
    },
    {
        id: 'kidp7ns3',
        username: 'Selmer18',
    },
    {
        id: 'pwoee3b0',
        username: 'Uriah2',
    },
    {
        id: 'de1p9xq4',
        username: 'Modesto.Schmeler',
    },
    {
        id: 'r51ua1lj',
        username: 'Penelope_Flatley91',
    },
    {
        id: '45i3cquf',
        username: 'Austyn_Marquardt68',
    },
    {
        id: 'ms26vokd',
        username: 'Lyla_VonRueden43',
    },
    {
        id: 'enuss7l1',
        username: 'Pierre_Price',
    },
    {
        id: '5yyv8qmx',
        username: 'Evan_Lemke',
    },
    {
        id: '236cbpb1',
        username: 'Guillermo89',
    },
    {
        id: '5anm2ibz',
        username: 'Hobart.Nikolaus',
    },
    {
        id: 'flk7682x',
        username: 'Verdie.Abbott58',
    },
    {
        id: 'fjzfboqj',
        username: 'Blanche94',
    },
    {
        id: 'lzaj894l',
        username: 'Geovany_Davis48',
    },
    {
        id: '0t3y0kc0',
        username: 'Shaun.Bins57',
    },
    {
        id: 'ls3rpeku',
        username: 'Samanta.Kreiger',
    },
    {
        id: 'm60xzdnp',
        username: 'Alanis69',
    },
    {
        id: 'pl7xy9bb',
        username: 'Darrin.Nikolaus95',
    },
    {
        id: 'z2e6l9my',
        username: 'Oren.Zulauf',
    },
    {
        id: 'bote1xat',
        username: 'Bernita_Morissette53',
    },
    {
        id: '0dq581wu',
        username: 'Stone24',
    },
    {
        id: '5j68vl10',
        username: 'Meda_Crona37',
    },
    {
        id: '8m6c0arc',
        username: 'Caleigh24',
    },
    {
        id: '11g4w8aq',
        username: 'Marley.Greenholt',
    },
    {
        id: '2lyoqh1p',
        username: 'Carmen.DuBuque23',
    },
    {
        id: 'x6h842t3',
        username: 'Fausto22',
    },
    {
        id: 'ed1tbyf9',
        username: 'Meggie26',
    },
    {
        id: 'h1nmxjm3',
        username: 'Reta_Berge',
    },
    {
        id: '0ee74lv6',
        username: 'Davonte_Davis',
    },
    {
        id: 'r6whf0j3',
        username: 'Paxton.Rice64',
    },
    {
        id: 'vbx7d37z',
        username: 'Meredith63',
    },
    {
        id: 'gw11xk0m',
        username: 'Ellis_Mann',
    },
    {
        id: 'poljglp3',
        username: 'Noemie58',
    },
    {
        id: 'qtv6zoov',
        username: 'Layne_Lindgren30',
    },
    {
        id: '3fdlyllb',
        username: 'Nelle42',
    },
    {
        id: 'wiamxuso',
        username: 'Arnulfo.Buckridge',
    },
    {
        id: '5i2e66x7',
        username: 'Shana.Predovic88',
    },
    {
        id: 'khgx228t',
        username: 'Ellis.Fay83',
    },
    {
        id: 'f2yainxe',
        username: 'Beryl.Rempel56',
    },
    {
        id: 'a5x1hpa2',
        username: 'Doug_Littel77',
    },
    {
        id: '2ompnoya',
        username: 'Gwendolyn.Gulgowski',
    },
    {
        id: '0rhd4v4h',
        username: 'Olaf.OKeefe',
    },
    {
        id: 'r2k9bj1y',
        username: 'Peyton_McLaughlin77',
    },
    {
        id: '83vn13rk',
        username: 'Karen.Dietrich',
    },
    {
        id: '0guaei7p',
        username: 'Alex_Feest73',
    },
    {
        id: 'fop01iaz',
        username: 'Helen_Nicolas',
    },
    {
        id: 'mj9gvysw',
        username: 'Elian37',
    },
    {
        id: 'ezgkoyq0',
        username: 'Vern_Cremin17',
    },
    {
        id: 'pzmued4i',
        username: 'Madelynn_Runolfsson',
    },
    {
        id: '4u3cpbwd',
        username: 'Diamond64',
    },
    {
        id: 'aak070to',
        username: 'Hermina_Nicolas8',
    },
    {
        id: 'hueuue5d',
        username: 'Zachariah.Beatty',
    },
    {
        id: 'ckls9thg',
        username: 'Mortimer57',
    },
    {
        id: 'kleiiymq',
        username: 'Corrine.Abbott26',
    },
    {
        id: 'pvxl0j4x',
        username: 'Amaya10',
    },
    {
        id: '2aavlecd',
        username: 'Darrell93',
    },
    {
        id: 'qe9jmsls',
        username: 'Kenny.Russel',
    },
    {
        id: 'xn8pkq9n',
        username: 'Corine51',
    },
    {
        id: 'eabg2gj3',
        username: 'Alysa.Welch16',
    },
    {
        id: 'qet38wrn',
        username: 'Marcos.Altenwerth',
    },
    {
        id: 'l43ruoy2',
        username: 'Terrell_Schiller',
    },
    {
        id: 'ktei13ey',
        username: 'Bud_Kris96',
    },
    {
        id: 'mkklpqb1',
        username: 'Eddie85',
    },
    {
        id: '8xk5coh1',
        username: 'Aaron2',
    },
    {
        id: 'a3gsss9z',
        username: 'Simeon39',
    },
    {
        id: 'a7ic4o1z',
        username: 'Quinton.Halvorson',
    },
    {
        id: 'ly5s1t02',
        username: 'Karen.Farrell27',
    },
    {
        id: 'e6fy5dpt',
        username: 'Kelsi.Prosacco65',
    },
    {
        id: '098n1qcu',
        username: 'Stella.Gottlieb25',
    },
    {
        id: 'ope8ulnr',
        username: 'Elton_Jakubowski',
    },
    {
        id: '2bw0o3y6',
        username: 'Rosalyn56',
    },
    {
        id: 'ybu7hr6u',
        username: 'Claudia89',
    },
    {
        id: 'h0eozpg6',
        username: 'George_Kuhlman73',
    },
    {
        id: 'q8nxroej',
        username: 'Ashley_Wyman',
    },
    {
        id: 'mre3q4wz',
        username: 'Audreanne.Heaney',
    },
    {
        id: 'cg32wv8e',
        username: 'Verla.Roob46',
    },
    {
        id: 'lx8oi3i1',
        username: 'Nadia.Hand',
    },
    {
        id: '1wtocu6b',
        username: 'Dayna51',
    },
    {
        id: 'jhbyh4ep',
        username: 'Carli_Greenfelder25',
    },
    {
        id: '1rz9ovum',
        username: 'Maxie.Rutherford',
    },
    {
        id: '4w1j2yg1',
        username: 'Bennie72',
    },
    {
        id: 'idvk6m1l',
        username: 'Toby_Beier23',
    },
    {
        id: 'a76cky04',
        username: 'Maudie25',
    },
    {
        id: '1190drh1',
        username: 'Evan70',
    },
    {
        id: '6xhoyddb',
        username: 'Geovanny27',
    },
    {
        id: 'spoq7j0q',
        username: 'Isabel21',
    },
    {
        id: 'gilqfd6y',
        username: 'Anjali87',
    },
    {
        id: 'h3xt4g85',
        username: 'Sage5',
    },
    {
        id: 'u713a2y8',
        username: 'Annalise62',
    },
    {
        id: '091hl24d',
        username: 'Queen.Hettinger',
    },
    {
        id: '9d3l9hz7',
        username: 'Jane.Medhurst42',
    },
    {
        id: 'g5tum42k',
        username: 'Lester.Sawayn',
    },
    {
        id: 'nn1jfirs',
        username: 'Tyrese.Christiansen74',
    },
    {
        id: 'a47movx3',
        username: 'Khalid_Emmerich4',
    },
    {
        id: 'chhfzcng',
        username: 'Tyrese87',
    },
    {
        id: 'ru6xa659',
        username: 'Terry30',
    },
    {
        id: 'x84wvo48',
        username: 'Lisette.MacGyver',
    },
    {
        id: 'h85ndfvj',
        username: 'Addie_Turcotte',
    },
    {
        id: 'qncgu0jp',
        username: 'May.Wiegand',
    },
];

function getCurrentBalance(transactions: (UserTransaction | null)[]) {
    return transactions.reduce<number>((balance, transaction) => {
        if (transaction === null) {
            return balance;
        }

        if (transaction.type === 'debit') {
            return balance - transaction.amount;
        }

        return balance + transaction.amount;
    }, 0);
}

const allTransactions: UserTransaction[] = [];

for (const user of users) {
    const currency = sample(['USD' as const, 'EUR' as const, 'GBP' as const]);
    const transactionsCount = random(3, 10);
    const transactions: UserTransaction[] = [];

    times(transactionsCount, () => {
        const currentBalance = getCurrentBalance(transactions);
        const transactionAmount = random(1, 100);

        if (transactionAmount <= currentBalance) {
            const type = sample(['debit' as const, 'credit' as const]);

            transactions.push({
                userId: user.id,
                amount: transactionAmount,
                type,
                currency,
            });

            return;
        }

        transactions.push({
            userId: user.id,
            amount: transactionAmount,
            type: 'credit' as const,
            currency,
        });
    });

    allTransactions.push(...transactions);
}

console.log(JSON.stringify(shuffle(allTransactions), null, 4));
