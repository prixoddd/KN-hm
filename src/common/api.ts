import { setAlert, setLoader } from '@/common/app-reducer'
import { setShipments } from '@/common/shipments-reducer'
import { RootObject } from '@/common/types'
import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'

export const shipmentsApi = {
  getShipments(apiUrl: string) {
    return axios.get<RootObject>(apiUrl)
  },
}

export const getObjectAfterDelay = (): Promise<any> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = dataFromServer

      resolve(data)
    }, 5000)
  })
}

export const fetchData = (apiUrl: string) => (dispatch: Dispatch) => {
  dispatch(setLoader(true))
  shipmentsApi
    .getShipments(apiUrl)
    .then(result => {
      if (result) {
        dispatch(setLoader(false))
        dispatch(setShipments(result.data))

        dispatch(
          setAlert({
            severity: 'success',
            text: { message: 'Data successfully fetched' },
          })
        )

        return result
      }
    })
    .catch(e => {
      dispatch(setAlert({ severity: 'error', text: e as { message: string } }))
      dispatch(setLoader(true))

      return e
    })
    .then(result => {
      if (result.status !== 200) {
        setTimeout(async () => {
          dispatch(
            setAlert({
              severity: 'info',
              text: { message: 'Fetching data from a backup resource' },
            })
          )
        }, 1000)
        getObjectAfterDelay()
          .then(result => {
            if (result) {
              dispatch(setLoader(false))
              dispatch(setShipments(result))
              dispatch(
                setAlert({
                  severity: 'success',
                  text: { message: 'Data successfully fetched' },
                })
              )
            }
          })
          .catch(error => {
            // handle error from backup resource fetch
            console.error('Error fetching data from backup resource:', error)
          })
      }
    })
}

const dataFromServer = [
  {
    consignee: 'Koppers Holdings Inc.',
    customer: 'NXP Semiconductors N.V.',
    date: '10/16/2019',
    orderNo: 'zz-450581-11385595-4210084',
    status: "'In Transit'",
    trackingNo: 'TP-724057-72553473-5647860',
  },
  {
    consignee: 'Celsius Holdings, Inc.',
    customer: 'Triumph Bancorp, Inc.',
    date: '8/20/2019',
    orderNo: 'kk-275651-64476049-3346442',
    status: "'Delivered'",
    trackingNo: 'TP-011637-13598236-2700556',
  },
  {
    consignee: 'Hovnanian Enterprises Inc',
    customer: 'Inter Parfums, Inc.',
    date: '7/10/2019',
    orderNo: 'nz-906145-26850629-1813784',
    status: "'Delivered'",
    trackingNo: 'TP-065338-70937481-7664135',
  },
  {
    consignee: 'PowerShares FTSE RAFI US 1500 Small-Mid Portfolio',
    customer: 'LATAM Airlines Group S.A.',
    date: '10/18/2019',
    orderNo: 'wa-135797-54904524-4596563',
    status: "'Delivered'",
    trackingNo: 'TP-129236-97859281-4401097',
  },
  {
    consignee: 'U S Concrete, Inc.',
    customer: 'Convergys Corporation',
    date: '10/4/2019',
    orderNo: 'mi-064658-96548505-2165485',
    status: "'Delivered'",
    trackingNo: 'TP-135069-25296081-1506638',
  },
  {
    consignee: 'Invesco Value Municipal Income Trust',
    customer: 'AZZ Inc.',
    date: '11/9/2018',
    orderNo: 'lh-164038-58922533-4712164',
    status: "'Delivered'",
    trackingNo: 'TP-083396-64165106-1703715',
  },
  {
    consignee: 'North European Oil Royality Trust',
    customer: 'TJX Companies, Inc. (The)',
    date: '5/21/2019',
    orderNo: 'ai-453521-24500731-2401400',
    status: "'In Transit'",
    trackingNo: 'TP-053121-86301492-9958612',
  },
  {
    consignee: 'Premier Financial Bancorp, Inc.',
    customer: 'GSI Technology, Inc.',
    date: '1/21/2019',
    orderNo: 'rc-217718-18675744-1608276',
    status: "'Shipped'",
    trackingNo: 'TP-925050-48587343-8294484',
  },
  {
    consignee: 'Orchid Island Capital, Inc.',
    customer: 'Banc of California, Inc.',
    date: '2/16/2019',
    orderNo: 'zo-633194-71301581-5212971',
    status: "'Shipped'",
    trackingNo: 'TP-755353-40936234-2002940',
  },
  {
    consignee: 'Capital City Bank Group',
    customer: 'WisdomTree Emerging Markets Consumer Growth Fund',
    date: '9/22/2019',
    orderNo: 'mo-203568-39924097-9152459',
    status: "'In Transit'",
    trackingNo: 'TP-604044-93835112-3256076',
  },
  {
    consignee: 'First Trust CEF Income Opportunity ETF',
    customer: 'Capella Education Company',
    date: '2/20/2019',
    orderNo: 'cx-748590-44028485-1603782',
    status: "'Delivered'",
    trackingNo: 'TP-081494-05092234-0184759',
  },
  {
    consignee: 'Aflac Incorporated',
    customer: 'EnLink Midstream Partners, LP',
    date: '12/14/2018',
    orderNo: 'pq-142246-85970136-5453809',
    status: "'In Transit'",
    trackingNo: 'TP-063363-14499858-7629745',
  },
  {
    consignee: 'Asia Pacific Fund, Inc. (The)',
    customer: 'Veeva Systems Inc.',
    date: '2/26/2019',
    orderNo: 'et-944763-55939925-7398997',
    status: "'Shipped'",
    trackingNo: 'TP-447632-98521215-1610412',
  },
  {
    consignee: 'DLH Holdings Corp.',
    customer: 'MSB Financial Corp.',
    date: '8/2/2019',
    orderNo: 'wn-783968-83711541-6200497',
    status: "'Delivered'",
    trackingNo: 'TP-314639-56603722-6492758',
  },
  {
    consignee: 'Edwards Lifesciences Corporation',
    customer: 'LeMaitre Vascular, Inc.',
    date: '3/27/2019',
    orderNo: 'lh-283680-00171882-9462208',
    status: "'In Transit'",
    trackingNo: 'TP-557062-05155733-0420380',
  },
  {
    consignee: 'Origo Acquisition Corporation',
    customer: 'Rosehill Resources Inc.',
    date: '11/6/2018',
    orderNo: 'hp-825238-29256704-8178682',
    status: "'In Transit'",
    trackingNo: 'TP-474699-75729856-7593674',
  },
  {
    consignee: 'Eaton Vance Senior Income Trust',
    customer: 'Westmoreland Coal Company',
    date: '4/6/2019',
    orderNo: 'fc-726665-05052726-0237677',
    status: "'Shipped'",
    trackingNo: 'TP-066537-95535201-2669175',
  },
  {
    consignee: 'TRACON Pharmaceuticals, Inc.',
    customer: 'Manitowoc Company, Inc. (The)',
    date: '5/11/2019',
    orderNo: 'xs-073232-72379516-7298535',
    status: "'In Transit'",
    trackingNo: 'TP-584387-88215216-6136525',
  },
  {
    consignee: 'Cameco Corporation',
    customer: 'Tableau Software, Inc.',
    date: '10/16/2019',
    orderNo: 'qr-636413-10456170-0669100',
    status: "'Shipped'",
    trackingNo: 'TP-911174-78268582-4893858',
  },
  {
    consignee: 'Financial Institutions, Inc.',
    customer: 'Kite Realty Group Trust',
    date: '3/4/2019',
    orderNo: 'sd-241560-32666088-6483146',
    status: "'Shipped'",
    trackingNo: 'TP-905027-04146988-6067069',
  },
  {
    consignee: 'Electrum Special Acquisition Corporation',
    customer: 'Eaton Vance Enhance Equity Income Fund',
    date: '12/21/2018',
    orderNo: 'ct-817777-15116781-0435666',
    status: "'Delivered'",
    trackingNo: 'TP-873521-32036810-3636499',
  },
  {
    consignee: 'CapStar Financial Holdings, Inc.',
    customer: 'Solar Capital Ltd.',
    date: '4/21/2019',
    orderNo: 'cs-166898-63799701-5601264',
    status: "'Delivered'",
    trackingNo: 'TP-426008-20400579-7743769',
  },
  {
    consignee: 'Cornerstone OnDemand, Inc.',
    customer: 'B. Riley Financial, Inc.',
    date: '1/28/2019',
    orderNo: 'fb-413856-93339127-9045330',
    status: "'Shipped'",
    trackingNo: 'TP-280288-52691040-1783186',
  },
  {
    consignee: 'Flexsteel Industries, Inc.',
    customer: 'Haynes International, Inc.',
    date: '12/3/2018',
    orderNo: 'qc-634523-64469631-1742200',
    status: "'Shipped'",
    trackingNo: 'TP-936389-31166267-0580503',
  },
  {
    consignee: 'Encore Capital Group Inc',
    customer: 'Bridgford Foods Corporation',
    date: '7/20/2019',
    orderNo: 'mu-810148-40292686-0836280',
    status: "'Delivered'",
    trackingNo: 'TP-881889-39778870-5120281',
  },
  {
    consignee: 'Synopsys, Inc.',
    customer: 'Banco Bradesco Sa',
    date: '9/20/2019',
    orderNo: 'ld-477507-34523019-1635174',
    status: "'Delivered'",
    trackingNo: 'TP-933236-70388133-8607602',
  },
  {
    consignee: 'Safe Bulkers, Inc',
    customer: 'Broadcom Limited',
    date: '4/22/2019',
    orderNo: 'oq-554466-99476343-4926387',
    status: "'Shipped'",
    trackingNo: 'TP-455213-16914357-4487340',
  },
  {
    consignee: 'Kinder Morgan, Inc.',
    customer: 'Blackrock MuniHoldings Quality Fund, Inc.',
    date: '11/30/2018',
    orderNo: 'ep-347747-46384155-1538186',
    status: "'Shipped'",
    trackingNo: 'TP-830909-88807348-1170156',
  },
  {
    consignee: 'Rigel Pharmaceuticals, Inc.',
    customer: 'Marinus Pharmaceuticals, Inc.',
    date: '2/6/2019',
    orderNo: 'tc-167880-59038685-8445609',
    status: "'Shipped'",
    trackingNo: 'TP-817208-08907831-7610442',
  },
  {
    consignee: 'Blackrock New York Municipal Bond Trust',
    customer: 'Wells Fargo \u0026 Company',
    date: '2/4/2019',
    orderNo: 'bl-017799-67096222-9489924',
    status: "'Delivered'",
    trackingNo: 'TP-676345-52655694-7798204',
  },
  {
    consignee: 'Everest Re Group, Ltd.',
    customer: 'Forward Industries, Inc.',
    date: '8/14/2019',
    orderNo: 'kh-751811-14767400-9220209',
    status: "'Shipped'",
    trackingNo: 'TP-534060-08935834-9750226',
  },
  {
    consignee: 'Johnson Controls International plc',
    customer: 'Global X Robotics \u0026 Artificial Intelligence ETF',
    date: '10/1/2019',
    orderNo: 'uj-506993-93018602-6605616',
    status: "'Delivered'",
    trackingNo: 'TP-785884-74650153-7878942',
  },
  {
    consignee: 'Jumei International Holding Limited',
    customer: 'Alliance HealthCare Services, Inc.',
    date: '7/8/2019',
    orderNo: 'hj-655654-64206287-1802049',
    status: "'Shipped'",
    trackingNo: 'TP-146143-43714773-0714198',
  },
  {
    consignee: 'MSC Industrial Direct Company, Inc.',
    customer: 'Dreyfus Strategic Municipals, Inc.',
    date: '11/14/2018',
    orderNo: 'oq-750933-62868437-0392636',
    status: "'Delivered'",
    trackingNo: 'TP-803249-37305387-0535567',
  },
  {
    consignee: 'German American Bancorp, Inc.',
    customer: 'Galena Biopharma, Inc.',
    date: '3/20/2019',
    orderNo: 'gp-691933-47409622-1892982',
    status: "'In Transit'",
    trackingNo: 'TP-534144-61893825-4732058',
  },
  {
    consignee: 'Digital Realty Trust, Inc.',
    customer: 'Whiting Petroleum Corporation',
    date: '1/20/2019',
    orderNo: 'zp-524696-28814993-0452933',
    status: "'Shipped'",
    trackingNo: 'TP-826026-75149868-3094468',
  },
  {
    consignee: 'Cemtrex Inc.',
    customer: 'Teekay Tankers Ltd.',
    date: '2/8/2019',
    orderNo: 'wa-472409-07616555-6230504',
    status: "'Delivered'",
    trackingNo: 'TP-322611-76705250-3801890',
  },
  {
    consignee: 'AMERISAFE, Inc.',
    customer: 'Synthetic Fixed-Income Securities, Inc.',
    date: '6/19/2019',
    orderNo: 'fg-662165-26343675-5272190',
    status: "'Delivered'",
    trackingNo: 'TP-109933-41966889-7461941',
  },
  {
    consignee: 'Legacy Reserves LP',
    customer: 'Rubicon Technology, Inc.',
    date: '10/19/2019',
    orderNo: 'ui-537178-18137048-6443061',
    status: "'Shipped'",
    trackingNo: 'TP-275917-84383737-6967873',
  },
  {
    consignee: 'First Busey Corporation',
    customer: 'Geospace Technologies Corporation',
    date: '4/23/2019',
    orderNo: 'bw-573028-03878381-8734310',
    status: "'In Transit'",
    trackingNo: 'TP-892528-83484681-2406840',
  },
  {
    consignee: 'Vornado Realty Trust',
    customer: 'AlphaMark Actively Managed Small Cap ETF',
    date: '6/28/2019',
    orderNo: 'lz-848491-02792184-6145387',
    status: "'In Transit'",
    trackingNo: 'TP-899849-22392334-6415340',
  },
  {
    consignee: 'Capital One Financial Corporation',
    customer: 'CHS Inc',
    date: '12/13/2018',
    orderNo: 'yp-484312-54990190-4291466',
    status: "'Shipped'",
    trackingNo: 'TP-870941-17003927-3294847',
  },
  {
    consignee: 'Aoxin Tianli Group, Inc.',
    customer: 'Urstadt Biddle Properties Inc.',
    date: '8/23/2019',
    orderNo: 'ee-220223-73087673-5110761',
    status: "'Shipped'",
    trackingNo: 'TP-754793-46228193-1976073',
  },
  {
    consignee: 'Wells Fargo \u0026 Company',
    customer: 'TICC Capital Corp.',
    date: '4/7/2019',
    orderNo: 'pw-192202-81357144-9516906',
    status: "'Shipped'",
    trackingNo: 'TP-061150-96733345-1774802',
  },
  {
    consignee: 'Chatham Lodging Trust (REIT)',
    customer: 'Pointer Telocation Ltd.',
    date: '3/13/2019',
    orderNo: 'mf-793366-05592007-5056451',
    status: "'Delivered'",
    trackingNo: 'TP-565295-44483893-3470603',
  },
  {
    consignee: 'Legg Mason US Diversified Core ETF',
    customer: 'WisdomTree Germany Hedged Equity Fund',
    date: '2/21/2019',
    orderNo: 'yb-521430-39751524-9817134',
    status: "'In Transit'",
    trackingNo: 'TP-784622-08984379-4496045',
  },
  {
    consignee: 'Elbit Systems Ltd.',
    customer: 'PowerShares FTSE RAFI US 1500 Small-Mid Portfolio',
    date: '10/26/2018',
    orderNo: 'jc-847026-05385245-4587606',
    status: "'Delivered'",
    trackingNo: 'TP-469447-00234146-5461565',
  },
  {
    consignee: 'JMP Group LLC',
    customer: 'Fossil Group, Inc.',
    date: '1/2/2019',
    orderNo: 'pi-616017-87644085-5367780',
    status: "'In Transit'",
    trackingNo: 'TP-115474-08783906-3920647',
  },
  {
    consignee: 'National American University Holdings, Inc.',
    customer: 'Aramark',
    date: '4/22/2019',
    orderNo: 'oa-432865-20024981-1090998',
    status: "'Delivered'",
    trackingNo: 'TP-556665-70234873-1412107',
  },
  {
    consignee: 'Broadwind Energy, Inc.',
    customer: 'Peregrine Pharmaceuticals Inc.',
    date: '3/28/2019',
    orderNo: 'mv-744695-50731343-4171480',
    status: "'Shipped'",
    trackingNo: 'TP-538847-87645999-0903791',
  },
  {
    consignee: 'Paramount Group, Inc.',
    customer: 'Trillium Therapeutics Inc.',
    date: '4/27/2019',
    orderNo: 'vz-081180-23854180-5400650',
    status: "'In Transit'",
    trackingNo: 'TP-481944-28325084-4747289',
  },
  {
    consignee: 'Cooper Tire \u0026 Rubber Company',
    customer: 'Babson Global Short Duration High Yield Fund',
    date: '3/12/2019',
    orderNo: 'jy-996796-36867940-0660508',
    status: "'Shipped'",
    trackingNo: 'TP-357172-85175578-7025381',
  },
  {
    consignee: 'Zion Oil \u0026 Gas Inc',
    customer: 'Toll Brothers Inc.',
    date: '7/2/2019',
    orderNo: 'bb-884662-34088451-9796707',
    status: "'Shipped'",
    trackingNo: 'TP-957603-00401706-3049997',
  },
  {
    consignee: 'FIRST REPUBLIC BANK',
    customer: 'Verso Corporation',
    date: '6/6/2019',
    orderNo: 'ix-979463-92446937-4996750',
    status: "'Delivered'",
    trackingNo: 'TP-819279-00638051-0482903',
  },
  {
    consignee: 'CoStar Group, Inc.',
    customer: 'Bioverativ Inc.',
    date: '6/20/2019',
    orderNo: 'hl-461777-13138397-0829393',
    status: "'Shipped'",
    trackingNo: 'TP-884025-24810608-5170059',
  },
  {
    consignee: 'American Woodmark Corporation',
    customer: 'Agios Pharmaceuticals, Inc.',
    date: '5/27/2019',
    orderNo: 'qo-005692-00986015-6943199',
    status: "'Delivered'",
    trackingNo: 'TP-971547-86661911-4715986',
  },
  {
    consignee: 'Crawford \u0026 Company',
    customer: 'FuelCell Energy, Inc.',
    date: '12/22/2018',
    orderNo: 'mo-565503-92396362-8732313',
    status: "'Delivered'",
    trackingNo: 'TP-755323-98564712-6042093',
  },
  {
    consignee: 'MFS Government Markets Income Trust',
    customer: 'CarMax Inc',
    date: '8/26/2019',
    orderNo: 'yt-457520-88998344-9580507',
    status: "'Shipped'",
    trackingNo: 'TP-673523-33957774-3020598',
  },
  {
    consignee: 'Wells Fargo \u0026 Company',
    customer: 'SLM Corporation',
    date: '2/24/2019',
    orderNo: 'du-211100-32416246-8260778',
    status: "'In Transit'",
    trackingNo: 'TP-645235-49193812-7256248',
  },
  {
    consignee: 'Great Southern Bancorp, Inc.',
    customer: 'VelocityShares Daily Inverse VIX Short-Term ETN',
    date: '6/26/2019',
    orderNo: 'ng-120463-83760987-6822034',
    status: "'Shipped'",
    trackingNo: 'TP-386051-80540014-8942884',
  },
  {
    consignee: 'American Financial Group, Inc.',
    customer: 'Graham Corporation',
    date: '11/7/2018',
    orderNo: 'bn-642718-48385131-1169966',
    status: "'In Transit'",
    trackingNo: 'TP-883394-75938322-7036812',
  },
  {
    consignee: 'Avon Products, Inc.',
    customer: 'Western Asset Bond Fund',
    date: '1/2/2019',
    orderNo: 'yw-017513-63073240-1162935',
    status: "'Delivered'",
    trackingNo: 'TP-896504-31902404-5200332',
  },
  {
    consignee: 'Marriott International',
    customer: 'QEP Resources, Inc.',
    date: '11/13/2018',
    orderNo: 'va-724720-96900719-4957325',
    status: "'Delivered'",
    trackingNo: 'TP-516708-63968775-7762639',
  },
  {
    consignee: 'Carrizo Oil \u0026 Gas, Inc.',
    customer: 'Windstream Holdings, Inc.',
    date: '11/5/2018',
    orderNo: 'gj-133672-60586507-2936943',
    status: "'In Transit'",
    trackingNo: 'TP-383961-06769628-8509915',
  },
  {
    consignee: 'Western Gas Partners, LP',
    customer: 'Seagate Technology PLC',
    date: '6/25/2019',
    orderNo: 'sa-758847-47344016-0121654',
    status: "'Delivered'",
    trackingNo: 'TP-487182-45032392-3551976',
  },
  {
    consignee: 'CB Financial Services, Inc.',
    customer: 'Aegon NV',
    date: '3/7/2019',
    orderNo: 'zm-215685-45889341-8318853',
    status: "'Shipped'",
    trackingNo: 'TP-907219-35549821-9729847',
  },
  {
    consignee: 'Forum Energy Technologies, Inc.',
    customer: 'EXFO Inc',
    date: '8/11/2019',
    orderNo: 'ef-506917-98222277-7369672',
    status: "'Shipped'",
    trackingNo: 'TP-353284-66097193-4357052',
  },
  {
    consignee: 'Royal Bank Of Canada',
    customer: 'ADOMANI, Inc.',
    date: '6/20/2019',
    orderNo: 'rs-065102-21592840-5121912',
    status: "'In Transit'",
    trackingNo: 'TP-557361-18328922-9430240',
  },
  {
    consignee: 'Cerus Corporation',
    customer: 'Wolverine Bancorp, Inc.',
    date: '6/28/2019',
    orderNo: 'zc-589438-40527936-2268643',
    status: "'In Transit'",
    trackingNo: 'TP-945723-71404166-3886916',
  },
  {
    consignee: 'AquaVenture Holdings Limited',
    customer: '1st Source Corporation',
    date: '5/2/2019',
    orderNo: 'jq-404846-69618817-7151674',
    status: "'Shipped'",
    trackingNo: 'TP-912759-00187150-5661853',
  },
  {
    consignee: 'Neos Therapeutics, Inc.',
    customer: 'Gol Linhas Aereas Inteligentes S.A.',
    date: '12/26/2018',
    orderNo: 'io-346673-68626537-2155207',
    status: "'In Transit'",
    trackingNo: 'TP-947411-44755147-1769266',
  },
  {
    consignee: 'Leucadia National Corporation',
    customer: 'New York Community Bancorp, Inc.',
    date: '7/1/2019',
    orderNo: 'kq-182102-50467488-6106849',
    status: "'Shipped'",
    trackingNo: 'TP-994271-23337129-7945788',
  },
  {
    consignee: 'Astoria Financial Corporation',
    customer: 'Stanley Black \u0026 Decker, Inc.',
    date: '8/11/2019',
    orderNo: 'zo-239497-21827681-5901304',
    status: "'Shipped'",
    trackingNo: 'TP-457773-38809181-7051033',
  },
  {
    consignee: 'Broadcom Limited',
    customer: 'Double Eagle Acquisition Corp.',
    date: '8/25/2019',
    orderNo: 'ga-109078-32588650-1024526',
    status: "'In Transit'",
    trackingNo: 'TP-710072-65048207-0081248',
  },
  {
    consignee: 'Ciena Corporation',
    customer: 'OMNOVA Solutions Inc.',
    date: '5/5/2019',
    orderNo: 'dk-885124-18537211-3667377',
    status: "'In Transit'",
    trackingNo: 'TP-561945-61920922-9693915',
  },
  {
    consignee: 'Gyrodyne , LLC',
    customer: 'Flexsteel Industries, Inc.',
    date: '2/5/2019',
    orderNo: 'hj-622095-98334913-3155262',
    status: "'In Transit'",
    trackingNo: 'TP-185069-36982469-7232922',
  },
  {
    consignee: 'Bank of America Corporation',
    customer: 'Bank of America Corporation',
    date: '9/17/2019',
    orderNo: 'jh-492281-09064379-6411670',
    status: "'Delivered'",
    trackingNo: 'TP-818173-76513032-8786628',
  },
  {
    consignee: 'Nuveen Multi-Market Income Fund',
    customer: 'FBL Financial Group, Inc.',
    date: '5/20/2019',
    orderNo: 'ph-558977-36978302-0791090',
    status: "'Shipped'",
    trackingNo: 'TP-295385-86897361-1846892',
  },
  {
    consignee: 'AgroFresh Solutions, Inc.',
    customer: 'Watts Water Technologies, Inc.',
    date: '3/16/2019',
    orderNo: 'ap-665840-10613137-2604915',
    status: "'Delivered'",
    trackingNo: 'TP-356787-81872422-1476269',
  },
  {
    consignee: 'GoPro, Inc.',
    customer: 'iPath US Treasury 10-year Bear ETN',
    date: '3/7/2019',
    orderNo: 'yo-734980-68564621-7395359',
    status: "'Shipped'",
    trackingNo: 'TP-833934-14135773-0866379',
  },
  {
    consignee: 'Centene Corporation',
    customer: 'Domtar Corporation',
    date: '11/26/2018',
    orderNo: 'uu-291597-76400234-2303783',
    status: "'Shipped'",
    trackingNo: 'TP-788246-86229652-5997889',
  },
  {
    consignee: 'Entergy Louisiana, Inc.',
    customer: 'Kinsale Capital Group, Inc.',
    date: '8/6/2019',
    orderNo: 'wd-579895-90006143-5709326',
    status: "'Delivered'",
    trackingNo: 'TP-914234-31662974-1084703',
  },
  {
    consignee: 'El Paso Electric Company',
    customer: 'Allied World Assurance Company Holdings, AG',
    date: '8/11/2019',
    orderNo: 'iv-269945-45417460-4229257',
    status: "'Delivered'",
    trackingNo: 'TP-135749-04008226-3553287',
  },
  {
    consignee: 'PJT Partners Inc.',
    customer: 'Global Brass and Copper Holdings, Inc.',
    date: '12/31/2018',
    orderNo: 'ce-837883-61569191-7149916',
    status: "'Delivered'",
    trackingNo: 'TP-120195-45972906-5794653',
  },
  {
    consignee: 'Hilton Worldwide Holdings Inc.',
    customer: 'OM Asset Management plc',
    date: '7/30/2019',
    orderNo: 'sh-026914-47776502-9172560',
    status: "'In Transit'",
    trackingNo: 'TP-372438-85818150-1704849',
  },
  {
    consignee: 'MEI Pharma, Inc.',
    customer: 'Dollar General Corporation',
    date: '4/3/2019',
    orderNo: 'zo-652259-49001585-0796606',
    status: "'Shipped'",
    trackingNo: 'TP-987106-37418013-0838406',
  },
  {
    consignee: 'Center Coast MLP \u0026 Infrastructure Fund',
    customer: 'Genesis Healthcare, Inc.',
    date: '3/28/2019',
    orderNo: 'ss-062977-73786813-1743811',
    status: "'Delivered'",
    trackingNo: 'TP-726059-12598444-7832992',
  },
  {
    consignee: 'Protagonist Therapeutics, Inc.',
    customer: 'General Finance Corporation',
    date: '4/29/2019',
    orderNo: 'nk-268204-29417649-2646320',
    status: "'In Transit'",
    trackingNo: 'TP-909955-88944946-0349930',
  },
  {
    consignee: 'First Trust/Aberdeen Global Opportunity Income Fund',
    customer: 'Internet Gold Golden Lines Ltd.',
    date: '9/29/2019',
    orderNo: 'sc-794787-59633156-9998991',
    status: "'Delivered'",
    trackingNo: 'TP-407443-86808912-0117970',
  },
  {
    consignee: 'Actua Corporation',
    customer: 'MFA Financial, Inc.',
    date: '1/28/2019',
    orderNo: 'qx-012443-92597245-3319433',
    status: "'Delivered'",
    trackingNo: 'TP-715275-17959329-7220106',
  },
  {
    consignee: 'Cabot Microelectronics Corporation',
    customer: 'J.C. Penney Company, Inc. Holding Company',
    date: '7/24/2019',
    orderNo: 'rn-949655-47052420-4319914',
    status: "'Delivered'",
    trackingNo: 'TP-093903-52844455-0943366',
  },
  {
    consignee: 'Urstadt Biddle Properties Inc.',
    customer: 'AMTEK, Inc.',
    date: '11/5/2018',
    orderNo: 'sz-663652-76748297-0342704',
    status: "'Shipped'",
    trackingNo: 'TP-727679-89627822-6069361',
  },
  {
    consignee: 'Pearson, Plc',
    customer: 'RLI Corp.',
    date: '10/17/2019',
    orderNo: 'ti-590935-17669077-3665206',
    status: "'Delivered'",
    trackingNo: 'TP-456659-82450926-3875084',
  },
  {
    consignee: 'PIMCO California Municipal Income Fund',
    customer: 'Bank of South Carolina Corp.',
    date: '3/17/2019',
    orderNo: 'qp-962178-39457873-0688641',
    status: "'In Transit'",
    trackingNo: 'TP-914436-75718024-0318828',
  },
  {
    consignee: 'DSP Group, Inc.',
    customer: 'PowerShares DWA Industrials Momentum Portfolio',
    date: '7/28/2019',
    orderNo: 'dh-389635-18388349-4214255',
    status: "'In Transit'",
    trackingNo: 'TP-942376-10756400-8744016',
  },
  {
    consignee: 'Petroquest Energy Inc',
    customer: 'Dollar General Corporation',
    date: '7/7/2019',
    orderNo: 'nd-012731-23342064-4220742',
    status: "'Delivered'",
    trackingNo: 'TP-820012-25674499-3491166',
  },
  {
    consignee: 'Fabrinet',
    customer: 'WisdomTree U.S. SmallCap Quality Dividend Growth Fund',
    date: '8/23/2019',
    orderNo: 'jm-351333-98090642-1293010',
    status: "'In Transit'",
    trackingNo: 'TP-040687-99955514-3709624',
  },
  {
    consignee: 'Randgold Resources Limited',
    customer: 'Costamare Inc.',
    date: '5/13/2019',
    orderNo: 'nt-605945-21318336-2271441',
    status: "'Shipped'",
    trackingNo: 'TP-190977-95109548-4192147',
  },
  {
    consignee: 'Sohu.com Inc.',
    customer: 'Kyocera Corporation',
    date: '5/26/2019',
    orderNo: 'sc-598790-54743796-0389793',
    status: "'In Transit'",
    trackingNo: 'TP-844514-48061393-3148975',
  },
  {
    consignee: 'First Trust High Income Long Short Fund',
    customer: 'EnPro Industries',
    date: '9/28/2019',
    orderNo: 'ow-703711-22269761-2230700',
    status: "'Delivered'",
    trackingNo: 'TP-873425-33904122-1967245',
  },
]