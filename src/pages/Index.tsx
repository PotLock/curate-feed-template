
import { useState, useMemo } from "react";
import { TweetCard } from "@/components/tweet/TweetCard";
import { SearchBar } from "@/components/tweet/SearchBar";
import { SortSelect } from "@/components/tweet/SortSelect";
import { Tweet } from "@/types/tweet";

const tweets: Tweet[] = [
  {
    "tweetId": "1882060160069414968",
    "userId": "1539013571123765251",
    "username": "magFOMO",
    "content": "🚨 JUST IN: \n\nOver 2 million wallets are eligible for the Jupuary airdrop. https://t.co/EHMTtENCJd",
    "curatorNotes": null,
    "curatorId": "1387449666552356870",
    "curatorUsername": "0xchluff",
    "curatorTweetId": "1882103280614211606",
    "createdAt": "2025-01-22T13:38:03.000Z",
    "submittedAt": "2025-01-22T16:30:32.840Z",
    "moderationHistory": [],
    "status": "pending"
  },
  {
    "tweetId": "1887429206516105342",
    "userId": "1792452558146961408",
    "username": "Memento_ai",
    "content": "🚀🚀🚀",
    "curatorNotes": "SEND AI / solana agent kit adds support for Python",
    "curatorId": "963338159043088384",
    "curatorUsername": "ShillKING22",
    "curatorTweetId": "1887433942728352039",
    "createdAt": "2025-02-06T09:12:44.000Z",
    "submittedAt": "2025-02-06T09:54:10.308Z",
    "moderationHistory": [],
    "status": "pending"
  },
  {
    "tweetId": "1880845169345573220",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨BREAKING: @realDonaldTrump's official Solana meme coin, $TRUMP, flips $PEPE to become the third-largest meme coin by market cap. https://t.co/mn0st7MNa4",
    "curatorNotes": "@realDonaldTrump",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1880854142077587708",
    "createdAt": "2025-01-19T05:10:07.000Z",
    "submittedAt": "2025-01-21T05:01:29.022Z",
    "moderationHistory": [
      {
        "tweetId": "1880845169345573220",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@realDonaldTrump",
        "timestamp": "2025-01-19T05:45:46.000Z",
        "moderationResponseTweetId": "1880854142077587708"
      },
      {
        "tweetId": "1880845169345573220",
        "feedId": "crypto",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@realDonaldTrump",
        "timestamp": "2025-01-19T05:45:46.000Z",
        "moderationResponseTweetId": "1880854142077587708"
      },
      {
        "tweetId": "1880845169345573220",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@realDonaldTrump",
        "timestamp": "2025-01-19T05:45:46.000Z",
        "moderationResponseTweetId": "1880854142077587708"
      },
      {
        "tweetId": "1880845169345573220",
        "feedId": "crypto",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@realDonaldTrump",
        "timestamp": "2025-01-19T05:45:46.000Z",
        "moderationResponseTweetId": "1880854142077587708"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1880854142077587708"
  },
  {
    "tweetId": "1881120625328361600",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨JUST IN: @phantom reports 8M+ requests per minute, causing wallet loading failures and transaction issues. Users face disruptions as Melania Trump's meme coin launch on Solana drives massive activity. Phantom says they’re working to stabilize the platform. https://t.co/roym4BZcCV",
    "curatorNotes": "@phantom",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1881124629563277362",
    "createdAt": "2025-01-19T23:24:41.000Z",
    "submittedAt": "2025-01-21T05:01:30.523Z",
    "moderationHistory": [
      {
        "tweetId": "1881120625328361600",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@phantom",
        "timestamp": "2025-01-19T23:40:35.000Z",
        "moderationResponseTweetId": "1881124629563277362"
      },
      {
        "tweetId": "1881120625328361600",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@phantom",
        "timestamp": "2025-01-19T23:40:35.000Z",
        "moderationResponseTweetId": "1881124629563277362"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1881124629563277362"
  },
  {
    "tweetId": "1881415488477217201",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨BREAKING: @solana's stablecoin market cap goes parabolic, hitting $9B and flipping Binance Chain for the first time, up 53% in the last 7 days. \n\nUSDT and USDC on Solana have grown 90% in the past 30 days, driving this explosive growth. https://t.co/ZpuBpG8qpL",
    "curatorNotes": "@solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1881578581542985773",
    "createdAt": "2025-01-20T18:56:22.000Z",
    "submittedAt": "2025-01-21T05:45:20.232Z",
    "moderationHistory": [
      {
        "tweetId": "1881415488477217201",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana",
        "timestamp": "2025-01-21T05:44:26.000Z",
        "moderationResponseTweetId": "1881578581542985773"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1881578581542985773"
  },
  {
    "tweetId": "1881446425151799799",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨JUST IN: Coinbase Protocol Specialist @ann_droo on Solana native tokens deposit/withdrawal delays on the exchange: “Solana’s high usage has pushed our infrastructure past its limits.” Clarifies that it’s not Solana’s fault. https://t.co/o1HxsjgZWb",
    "curatorNotes": "@ann_droo   Coinbase attributes delays on Solana native token deposits and withdrawals on their centralized exchange to network usage strain on their infrastructure",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1881627837519773724",
    "createdAt": "2025-01-20T20:59:17.000Z",
    "submittedAt": "2025-01-21T09:00:23.742Z",
    "moderationHistory": [
      {
        "tweetId": "1881446425151799799",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@ann_droo   Coinbase attributes delays on Solana native token deposits and withdrawals on their centralized exchange to network usage strain on their infrastructure",
        "timestamp": "2025-01-21T09:00:10.000Z",
        "moderationResponseTweetId": "1881627837519773724"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1881627837519773724"
  },
  {
    "tweetId": "1881511108021981403",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "BREAKING: SOLANA BECOMES THE PROTOCOL WITH THE HIGHEST 24H REVENUE https://t.co/XDFsucVkVt",
    "curatorNotes": "On Jan 21st Solana takes the no 1 spot for protocol revenue",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1881629096599494993",
    "createdAt": "2025-01-21T01:16:19.000Z",
    "submittedAt": "2025-01-21T09:05:46.380Z",
    "moderationHistory": [
      {
        "tweetId": "1881511108021981403",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "On Jan 21st Solana takes the no 1 spot for protocol revenue",
        "timestamp": "2025-01-21T09:05:10.000Z",
        "moderationResponseTweetId": "1881629096599494993"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1881629096599494993"
  },
  {
    "tweetId": "1881480770424049669",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "NEW: 250M $USDC MINTED AT @circle TREASURY ON SOLANA https://t.co/2eh4e1TRHZ",
    "curatorNotes": "@circle",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1881629189490774262",
    "createdAt": "2025-01-20T23:15:46.000Z",
    "submittedAt": "2025-01-21T09:05:47.315Z",
    "moderationHistory": [
      {
        "tweetId": "1881480770424049669",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@circle",
        "timestamp": "2025-01-21T09:05:32.000Z",
        "moderationResponseTweetId": "1881629189490774262"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1881629189490774262"
  },
  {
    "tweetId": "1881402106864918889",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "BREAKING: @JupiterExchange BREAKS INTO THE TOP 5 IOS @AppStore FINANCE RANKINGS IN THE U.S. https://t.co/IBqTVoBg2O",
    "curatorNotes": "@JupiterExchange @AppStore",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1881631289486508199",
    "createdAt": "2025-01-20T18:03:11.000Z",
    "submittedAt": "2025-01-21T09:21:40.399Z",
    "moderationHistory": [
      {
        "tweetId": "1881402106864918889",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@JupiterExchange @AppStore",
        "timestamp": "2025-01-21T09:13:53.000Z",
        "moderationResponseTweetId": "1881631289486508199"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1881631289486508199"
  },
  {
    "tweetId": "1882285468441866306",
    "userId": "6352222",
    "username": "rus",
    "content": "All $VINE dev tokens are locked until 4/20 at 4:20pm.\n\nThe re-locks will continue until Vine comes back.\n\n🌱 https://t.co/EfGGWw3Svn",
    "curatorNotes": "is VINE making a comeback on Solana?",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1882348486294978761",
    "createdAt": "2025-01-23T04:33:21.000Z",
    "submittedAt": "2025-01-23T08:44:24.941Z",
    "moderationHistory": [
      {
        "tweetId": "1882285468441866306",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "is VINE making a comeback on Solana?",
        "timestamp": "2025-01-23T08:43:46.000Z",
        "moderationResponseTweetId": "1882348486294978761"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1882348486294978761"
  },
  {
    "tweetId": "1882404342495662215",
    "userId": "2207129125",
    "username": "Cointelegraph",
    "content": "⚡️ JUST IN: Solana becomes the first chain to reach $200B in monthly DEX volume. https://t.co/JmF21X02JA",
    "curatorNotes": null,
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1882419275367153733",
    "createdAt": "2025-01-23T12:25:43.000Z",
    "submittedAt": "2025-01-23T13:25:51.050Z",
    "moderationHistory": [
      {
        "tweetId": "1882404342495662215",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-01-23T13:25:03.000Z",
        "moderationResponseTweetId": "1882419275367153733"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1882419275367153733"
  },
  {
    "tweetId": "1882907913255326188",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨BREAKING: @Grayscale files 19B-4 form for @Solana Spot ETF with NYSE (New York Stock Exchange). https://t.co/355pUPSJYC",
    "curatorNotes": "@Grayscale @solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1883039183020982335",
    "createdAt": "2025-01-24T21:46:43.000Z",
    "submittedAt": "2025-01-25T06:29:06.768Z",
    "moderationHistory": [
      {
        "tweetId": "1882907913255326188",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@Grayscale @solana",
        "timestamp": "2025-01-25T06:28:21.000Z",
        "moderationResponseTweetId": "1883039183020982335"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1883039183020982335"
  },
  {
    "tweetId": "1883074769899417961",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "BREAKING: @JupiterExchange ACQUIRES A MAJORITY STAKE IN MEMECOIN TRADING APP @moonshot https://t.co/TOVc9EcH4G",
    "curatorNotes": "@JupiterExchange @moonshot",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1883079483370168554",
    "createdAt": "2025-01-25T08:49:45.000Z",
    "submittedAt": "2025-01-25T09:26:55.009Z",
    "moderationHistory": [
      {
        "tweetId": "1883074769899417961",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@JupiterExchange @moonshot",
        "timestamp": "2025-01-25T09:08:29.000Z",
        "moderationResponseTweetId": "1883079483370168554"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1883079483370168554"
  },
  {
    "tweetId": "1882956905200730587",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "NEW: @coinbase ANNOUNCES \"MOVING FORWARD, WE'RE OPTIMIZING OUR EXISTING SYSTEMS AND BUILDING A NEXT-GEN SOLANA ARCHITECTURE TO ENSURE WE CAN PROVIDE FIRST-CLASS SUPPORT FOR SOLANA'S CONTINUED GROWTH\" https://t.co/lI6tvmRPZZ",
    "curatorNotes": "@coinbase",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1883081431074865277",
    "createdAt": "2025-01-25T01:01:24.000Z",
    "submittedAt": "2025-01-25T09:26:55.898Z",
    "moderationHistory": [
      {
        "tweetId": "1882956905200730587",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@coinbase",
        "timestamp": "2025-01-25T09:16:13.000Z",
        "moderationResponseTweetId": "1883081431074865277"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1883081431074865277"
  },
  {
    "tweetId": "1883124194013319340",
    "userId": "1830340867737178112",
    "username": "shawmakesmagic",
    "content": "Announcing the @JupiterExchange  x @ElizaOS_ai  MAGIC FUND\n\nWe are accelerating ambitious founders building gud tek.\n\nIf you are building something that will lead to a brighter future for all of us to live in, reach out!\n\ninquiries@elizalabs.ai https://t.co/ndOwaPbL1i",
    "curatorNotes": "@JupiterExchange @ElizaOS_ai      Jupiter and Eliza OS announce a $10 million fund for Open Source AI Builders",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1883388476126842948",
    "createdAt": "2025-01-25T12:06:09.000Z",
    "submittedAt": "2025-01-26T06:47:49.763Z",
    "moderationHistory": [
      {
        "tweetId": "1883124194013319340",
        "feedId": "grants",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@JupiterExchange @ElizaOS_ai      Jupiter and Eliza OS announce a $10 million fund for Open Source AI Builders",
        "timestamp": "2025-01-26T05:36:19.000Z",
        "moderationResponseTweetId": "1883388476126842948"
      },
      {
        "tweetId": "1883124194013319340",
        "feedId": "eliza",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@JupiterExchange @ElizaOS_ai      Jupiter and Eliza OS announce a $10 million fund for Open Source AI Builders",
        "timestamp": "2025-01-26T05:36:19.000Z",
        "moderationResponseTweetId": "1883388476126842948"
      },
      {
        "tweetId": "1883124194013319340",
        "feedId": "ai3",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@JupiterExchange @ElizaOS_ai      Jupiter and Eliza OS announce a $10 million fund for Open Source AI Builders",
        "timestamp": "2025-01-26T05:36:19.000Z",
        "moderationResponseTweetId": "1883388476126842948"
      },
      {
        "tweetId": "1883124194013319340",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@JupiterExchange @ElizaOS_ai      Jupiter and Eliza OS announce a $10 million fund for Open Source AI Builders",
        "timestamp": "2025-01-26T05:36:19.000Z",
        "moderationResponseTweetId": "1883388476126842948"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1883388476126842948"
  },
  {
    "tweetId": "1883320606323773447",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "NEW: SOLANA PROTOCOLS CAPTURE 6 OUT OF THE TOP 10 SPOTS FOR HIGHEST FEES GENERATED IN THE PAST 24 HOURS https://t.co/ywPZt6peiy",
    "curatorNotes": null,
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1883389986877407336",
    "createdAt": "2025-01-26T01:06:37.000Z",
    "submittedAt": "2025-01-26T06:47:53.910Z",
    "moderationHistory": [
      {
        "tweetId": "1883320606323773447",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-01-26T05:42:19.000Z",
        "moderationResponseTweetId": "1883389986877407336"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1883389986877407336"
  },
  {
    "tweetId": "1883081441917153337",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "BREAKING: @JupiterExchange ACQUIRES PORTFOLIO TRACKING TOOL @Sonarwatch - RELEASES \"JUPITER PORTFOLIO\" https://t.co/T6SnIk2daD",
    "curatorNotes": "@JupiterExchange @Sonarwatch",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1883419047934755102",
    "createdAt": "2025-01-25T09:16:16.000Z",
    "submittedAt": "2025-01-26T07:57:05.287Z",
    "moderationHistory": [
      {
        "tweetId": "1883081441917153337",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@JupiterExchange @Sonarwatch",
        "timestamp": "2025-01-26T07:37:47.000Z",
        "moderationResponseTweetId": "1883419047934755102"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1883419047934755102"
  },
  {
    "tweetId": "1882905494391759320",
    "userId": "1387497871751196672",
    "username": "WatcherGuru",
    "content": "JUST IN: Grayscale files for Solana $SOL ETF with NYSE.",
    "curatorNotes": null,
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1883419220282847414",
    "createdAt": "2025-01-24T21:37:07.000Z",
    "submittedAt": "2025-01-26T07:57:06.161Z",
    "moderationHistory": [
      {
        "tweetId": "1882905494391759320",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-01-26T07:38:29.000Z",
        "moderationResponseTweetId": "1883419220282847414"
      },
      {
        "tweetId": "1882905494391759320",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-01-26T07:38:29.000Z",
        "moderationResponseTweetId": "1883419220282847414"
      },
      {
        "tweetId": "1882905494391759320",
        "feedId": "crypto",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-01-26T07:38:29.000Z",
        "moderationResponseTweetId": "1883419220282847414"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1883419220282847414"
  },
  {
    "tweetId": "1883279771230241168",
    "userId": "1882799816205295616",
    "username": "FazeshiftCom",
    "content": "hi @solana👋 The countdown begins…  \n\nInteract &amp; drop sol wallet for $FSHIFT https://t.co/P5o7FsEEhS",
    "curatorNotes": "@solana   Fazeshift raises $4 million",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1883444762600157623",
    "createdAt": "2025-01-25T22:24:21.000Z",
    "submittedAt": "2025-01-26T10:04:55.914Z",
    "moderationHistory": [
      {
        "tweetId": "1883279771230241168",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana   Fazeshift raises $4 million",
        "timestamp": "2025-01-26T09:19:58.000Z",
        "moderationResponseTweetId": "1883444762600157623"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1883444762600157623"
  },
  {
    "tweetId": "1883160307868299473",
    "userId": "1488351240308379649",
    "username": "moludotsol",
    "content": "So @JupiterExchange just announced Jupnet. \n\nHere’s why it’s the most bullish thing in crypto. \n\n🧵/ https://t.co/BYkstD4D9Q",
    "curatorNotes": "@JupiterExchange @weremeow   Jupiter Exchange just annoucned Jupnet and Omnichain network for liquidity at their Conference Catstanbul in Turkey",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1883459582674305298",
    "createdAt": "2025-01-25T14:29:39.000Z",
    "submittedAt": "2025-01-26T10:21:55.816Z",
    "moderationHistory": [
      {
        "tweetId": "1883160307868299473",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@JupiterExchange @weremeow   Jupiter Exchange just annoucned Jupnet and Omnichain network for liquidity at their Conference Catstanbul in Turkey",
        "timestamp": "2025-01-26T10:18:52.000Z",
        "moderationResponseTweetId": "1883459582674305298"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1883459582674305298"
  },
  {
    "tweetId": "1883491752948146637",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨BREAKING: @JupiterExchange announces $JUP buybacks, allocating 50% of protocol fees to repurchase $JUP tokens. https://t.co/fRlD9AFVYq",
    "curatorNotes": "@JupiterExchange",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1883606183296282747",
    "createdAt": "2025-01-26T12:26:42.000Z",
    "submittedAt": "2025-01-26T21:50:17.167Z",
    "moderationHistory": [
      {
        "tweetId": "1883491752948146637",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@JupiterExchange",
        "timestamp": "2025-01-26T20:01:24.000Z",
        "moderationResponseTweetId": "1883606183296282747"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1883606183296282747"
  },
  {
    "tweetId": "1883909042139177252",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨LATEST: @solstrategies_, a publicly listed company on the Canadian Stock Exchange, has acquired an additional 19,100 $SOL for approximately $6.98 million CAD. https://t.co/6tKDKmyKbQ",
    "curatorNotes": "@solstrategies_",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1883983171903262809",
    "createdAt": "2025-01-27T16:04:51.000Z",
    "submittedAt": "2025-01-27T21:16:53.447Z",
    "moderationHistory": [
      {
        "tweetId": "1883909042139177252",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solstrategies_",
        "timestamp": "2025-01-27T20:59:25.000Z",
        "moderationResponseTweetId": "1883983171903262809"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1883983171903262809"
  },
  {
    "tweetId": "1884286761909772497",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "BREAKING: @DriftProtocol integrates with @Solana Agent Kit by @sendaifun, enabling AI agents to trade perps, borrow/lend, and interact with vaults. https://t.co/4oj2JttOW7",
    "curatorNotes": "@DriftProtocol @solana @sendaifun",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1884291386964672585",
    "createdAt": "2025-01-28T17:05:47.000Z",
    "submittedAt": "2025-01-28T17:24:58.394Z",
    "moderationHistory": [
      {
        "tweetId": "1884286761909772497",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@DriftProtocol @solana @sendaifun",
        "timestamp": "2025-01-28T17:24:09.000Z",
        "moderationResponseTweetId": "1884291386964672585"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1884291386964672585"
  },
  {
    "tweetId": "1884232158279254461",
    "userId": "1651199844365766656",
    "username": "sendaifun",
    "content": "Introducing DeepSeek 🤝 Solana Agent Kit –– OS Implementation:\n\nShowcased with an open-source 'Trump Agent,' –– DeepSeek acts as an advanced reasoning LLM performing actions like trading $TRUMP on Solana!\n\nMore details + code 🧵 https://t.co/BDeNlefBMU",
    "curatorNotes": "Solana Agent Kit integrates wtih DeepSeek's open source model demoing a $TRUMP trading agent",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1884293383180673300",
    "createdAt": "2025-01-28T13:28:48.000Z",
    "submittedAt": "2025-01-28T17:32:58.568Z",
    "moderationHistory": [
      {
        "tweetId": "1884232158279254461",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "Solana Agent Kit integrates wtih DeepSeek's open source model demoing a $TRUMP trading agent",
        "timestamp": "2025-01-28T17:32:05.000Z",
        "moderationResponseTweetId": "1884293383180673300"
      },
      {
        "tweetId": "1884232158279254461",
        "feedId": "ai3",
        "adminId": "plugrel",
        "action": "approve",
        "note": "Solana Agent Kit integrates wtih DeepSeek's open source model demoing a $TRUMP trading agent",
        "timestamp": "2025-01-28T17:32:05.000Z",
        "moderationResponseTweetId": "1884293383180673300"
      },
      {
        "tweetId": "1884232158279254461",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": "Solana Agent Kit integrates wtih DeepSeek's open source model demoing a $TRUMP trading agent",
        "timestamp": "2025-01-28T17:32:05.000Z",
        "moderationResponseTweetId": "1884293383180673300"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1884293383180673300"
  },
  {
    "tweetId": "1883899162220990664",
    "userId": "1093910462436118528",
    "username": "solstrategies_",
    "content": "🚨 Big moves from $HODL 🚨\n\nWe’ve acquired another 19,100 SOL, growing our holdings to 160,710 SOL worth $58.4M CAD as of Jan 24. \n\n📖 https://t.co/TpM8V7mbKr\n\nJoin us on Jan 28 at 4:30 PM EST for our Q4 Earnings Call to hear more about our strategy for advancing Solana’s infrastructure.\n\nEarnings call information: https://t.co/WoKv8Omkdr",
    "curatorNotes": null,
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1884304459985215741",
    "createdAt": "2025-01-27T15:25:36.000Z",
    "submittedAt": "2025-01-28T18:55:55.316Z",
    "moderationHistory": [
      {
        "tweetId": "1883899162220990664",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-01-28T18:16:06.000Z",
        "moderationResponseTweetId": "1884304459985215741"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1884304459985215741"
  },
  {
    "tweetId": "1884354998231769411",
    "userId": "516273728",
    "username": "JSeyff",
    "content": "UPDATE: @CBOE just re-filed all of their Solana ETF 19b-4s for @vaneck_us, @CanaryFunds, @BitwiseInvest &amp; @21Shares https://t.co/CUogAWBl6u",
    "curatorNotes": "@CBOE @vaneck_us @CanaryFunds @BitwiseInvest @21Shares",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1884455956269945044",
    "createdAt": "2025-01-28T21:36:55.000Z",
    "submittedAt": "2025-01-29T04:49:56.373Z",
    "moderationHistory": [
      {
        "tweetId": "1884354998231769411",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@CBOE @vaneck_us @CanaryFunds @BitwiseInvest @21Shares",
        "timestamp": "2025-01-29T04:18:06.000Z",
        "moderationResponseTweetId": "1884455956269945044"
      },
      {
        "tweetId": "1884354998231769411",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@CBOE @vaneck_us @CanaryFunds @BitwiseInvest @21Shares",
        "timestamp": "2025-01-29T04:18:06.000Z",
        "moderationResponseTweetId": "1884455956269945044"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1884455956269945044"
  },
  {
    "tweetId": "1884351611126047170",
    "userId": "516273728",
    "username": "JSeyff",
    "content": "UPDATE: Up in Canada we also have @PurposeInvest &amp; @3iq_corp filing to launch Solana ETFs. They filed yesterday https://t.co/Jy9FzGfEQ6",
    "curatorNotes": "@PurposeInvest @3iq_corp",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1884525558530515201",
    "createdAt": "2025-01-28T21:23:28.000Z",
    "submittedAt": "2025-01-29T08:55:23.382Z",
    "moderationHistory": [
      {
        "tweetId": "1884351611126047170",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@PurposeInvest @3iq_corp",
        "timestamp": "2025-01-29T08:54:40.000Z",
        "moderationResponseTweetId": "1884525558530515201"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1884525558530515201"
  },
  {
    "tweetId": "1884666071225164234",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨BREAKING: Former SEC &amp; CFTC Chief Economists Jim Overdahl and Craig Lewis release a deep-dive paper on @Solana, highlighting its technical advancements, how it surpasses earlier blockchains, and its global market potential. https://t.co/NipGG3ark9",
    "curatorNotes": "@solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1884790147168047597",
    "createdAt": "2025-01-29T18:13:01.000Z",
    "submittedAt": "2025-01-30T02:54:55.947Z",
    "moderationHistory": [
      {
        "tweetId": "1884666071225164234",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana",
        "timestamp": "2025-01-30T02:26:03.000Z",
        "moderationResponseTweetId": "1884790147168047597"
      },
      {
        "tweetId": "1884666071225164234",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana",
        "timestamp": "2025-01-30T02:26:03.000Z",
        "moderationResponseTweetId": "1884790147168047597"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1884790147168047597"
  },
  {
    "tweetId": "1884736106467299402",
    "userId": "1159375411438133249",
    "username": "_ilmoi",
    "content": "9 months ago we decied to pivot out of NFTs\n\nngl at the time felt like a fucking scary decision\n\ntoday @VECTORDOTFUN is doing 10x the revenue of @tensor_hq ($90m/yr). while being gated.\n\nconviction. https://t.co/xApabqrKma",
    "curatorNotes": "@VECTORDOTFUN @tensor_hq   Vectordotfun doing projected $90 million in annualized revenue while still being a gated mobile app",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1884810547797094736",
    "createdAt": "2025-01-29T22:51:19.000Z",
    "submittedAt": "2025-01-30T03:56:09.334Z",
    "moderationHistory": [
      {
        "tweetId": "1884736106467299402",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@VECTORDOTFUN @tensor_hq   Vectordotfun doing projected $90 million in annualized revenue while still being a gated mobile app",
        "timestamp": "2025-01-30T03:47:07.000Z",
        "moderationResponseTweetId": "1884810547797094736"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1884810547797094736"
  },
  {
    "tweetId": "1884588744612970737",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "BREAKING: @CryptoAutos_ officially integrates with @solana, enabling users to purchase luxury cars from global dealers with Solana payments.\n\nhttps://t.co/btf3Sd8Vuk",
    "curatorNotes": "@CryptoAutos_ @solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1884874309329723482",
    "createdAt": "2025-01-29T13:05:45.000Z",
    "submittedAt": "2025-01-30T08:03:42.502Z",
    "moderationHistory": [
      {
        "tweetId": "1884588744612970737",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@CryptoAutos_ @solana",
        "timestamp": "2025-01-30T08:00:29.000Z",
        "moderationResponseTweetId": "1884874309329723482"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1884874309329723482"
  },
  {
    "tweetId": "1884901589867184207",
    "userId": "2207129125",
    "username": "Cointelegraph",
    "content": "📊 UPDATE: Pumpdotfun flips Solana and Ethereum in monthly revenue. https://t.co/xZlD1Dx7uo",
    "curatorNotes": null,
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1884933033012367701",
    "createdAt": "2025-01-30T09:48:53.000Z",
    "submittedAt": "2025-01-30T12:08:00.797Z",
    "moderationHistory": [
      {
        "tweetId": "1884901589867184207",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-01-30T11:53:50.000Z",
        "moderationResponseTweetId": "1884933033012367701"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1884933033012367701"
  },
  {
    "tweetId": "1884880709526995402",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨BREAKING: @realDonaldTrump-branded merch stores have integrated @Solana Pay, enabling users to buy with $TRUMP memecoin. https://t.co/tRViMTTELl",
    "curatorNotes": "@realDonaldTrump @solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1884933438773530964",
    "createdAt": "2025-01-30T08:25:55.000Z",
    "submittedAt": "2025-01-30T12:08:02.768Z",
    "moderationHistory": [
      {
        "tweetId": "1884880709526995402",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@realDonaldTrump @solana",
        "timestamp": "2025-01-30T11:55:26.000Z",
        "moderationResponseTweetId": "1884933438773530964"
      },
      {
        "tweetId": "1884880709526995402",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@realDonaldTrump @solana",
        "timestamp": "2025-01-30T11:55:26.000Z",
        "moderationResponseTweetId": "1884933438773530964"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1884933438773530964"
  },
  {
    "tweetId": "1884987659673542920",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "BREAKING: @BlackRock-BACKED @Securitize INTEGRATES WITH SOLANA TO EXPAND TOKENIZED REAL-WORLD ASSETS https://t.co/vWQU6hi19x",
    "curatorNotes": "@BlackRock @Securitize",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1885174836139614646",
    "createdAt": "2025-01-30T15:30:54.000Z",
    "submittedAt": "2025-01-31T05:18:04.194Z",
    "moderationHistory": [
      {
        "tweetId": "1884987659673542920",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@BlackRock @Securitize",
        "timestamp": "2025-01-31T03:54:40.000Z",
        "moderationResponseTweetId": "1885174836139614646"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1885174836139614646"
  },
  {
    "tweetId": "1884966822795244017",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨EXCLUSIVE: Solana-based health data layer @PulseNoLimits hits 4K device sales, generating $1M in revenue. https://t.co/2FT7hksvnd",
    "curatorNotes": "@PulseNoLimits",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1885223619141525645",
    "createdAt": "2025-01-30T14:08:06.000Z",
    "submittedAt": "2025-01-31T07:29:12.822Z",
    "moderationHistory": [
      {
        "tweetId": "1884966822795244017",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@PulseNoLimits",
        "timestamp": "2025-01-31T07:08:31.000Z",
        "moderationResponseTweetId": "1885223619141525645"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1885223619141525645"
  },
  {
    "tweetId": "1884999567382282550",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "NEW: @jup_mobile INTRODUCES “MAGIC SCAN” - “SCAN, PASTE OR SHARE A PHOTO OR TEXT WITH JUPITER MOBILE AND LET US FIND THE TOKEN FOR YOU”\n\n https://t.co/pdFPCUskWJ",
    "curatorNotes": "@jup_mobile",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1885223801593749595",
    "createdAt": "2025-01-30T16:18:13.000Z",
    "submittedAt": "2025-01-31T07:29:13.726Z",
    "moderationHistory": [
      {
        "tweetId": "1884999567382282550",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@jup_mobile",
        "timestamp": "2025-01-31T07:09:14.000Z",
        "moderationResponseTweetId": "1885223801593749595"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1885223801593749595"
  },
  {
    "tweetId": "1885032889127231614",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "NEW: @krakenfx to launch crypto staking in the US, including @Solana and other chains. https://t.co/Bzo0d9KYUw",
    "curatorNotes": "@krakenfx @solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1885225372654198999",
    "createdAt": "2025-01-30T18:30:37.000Z",
    "submittedAt": "2025-01-31T07:29:14.545Z",
    "moderationHistory": [
      {
        "tweetId": "1885032889127231614",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@krakenfx @solana",
        "timestamp": "2025-01-31T07:15:29.000Z",
        "moderationResponseTweetId": "1885225372654198999"
      },
      {
        "tweetId": "1885032889127231614",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@krakenfx @solana",
        "timestamp": "2025-01-31T07:15:29.000Z",
        "moderationResponseTweetId": "1885225372654198999"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1885225372654198999"
  },
  {
    "tweetId": "1885042564178288947",
    "userId": "1651199844365766656",
    "username": "sendaifun",
    "content": "ElizaOS 🤝 SendAI Kit\n\nPowered by the Solana Agent Kit Plug-in –– all agents built using @ai16zdao's @elizaOS can now perform 30+ @solana actions!\n\nMore 🧵 https://t.co/nOYZiLCDYa",
    "curatorNotes": "@ai16zdao @elizaOS @solana @shawmakesmagic @aeyakovenko",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1885225759155118326",
    "createdAt": "2025-01-30T19:09:04.000Z",
    "submittedAt": "2025-01-31T07:29:15.929Z",
    "moderationHistory": [
      {
        "tweetId": "1885042564178288947",
        "feedId": "eliza",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@ai16zdao @elizaOS @solana @shawmakesmagic @aeyakovenko",
        "timestamp": "2025-01-31T07:17:01.000Z",
        "moderationResponseTweetId": "1885225759155118326"
      },
      {
        "tweetId": "1885042564178288947",
        "feedId": "ai3",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@ai16zdao @elizaOS @solana @shawmakesmagic @aeyakovenko",
        "timestamp": "2025-01-31T07:17:01.000Z",
        "moderationResponseTweetId": "1885225759155118326"
      },
      {
        "tweetId": "1885042564178288947",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@ai16zdao @elizaOS @solana @shawmakesmagic @aeyakovenko",
        "timestamp": "2025-01-31T07:17:01.000Z",
        "moderationResponseTweetId": "1885225759155118326"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1885225759155118326"
  },
  {
    "tweetId": "1885090659130093996",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨BREAKING: @Coinbase files for @Solana futures with @CFTC. https://t.co/it2qp20qN1",
    "curatorNotes": "@coinbase @solana @CFTC",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1885262858738643284",
    "createdAt": "2025-01-30T22:20:11.000Z",
    "submittedAt": "2025-01-31T13:09:07.953Z",
    "moderationHistory": [
      {
        "tweetId": "1885090659130093996",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@coinbase @solana @CFTC",
        "timestamp": "2025-01-31T09:44:26.000Z",
        "moderationResponseTweetId": "1885262858738643284"
      },
      {
        "tweetId": "1885090659130093996",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@coinbase @solana @CFTC",
        "timestamp": "2025-01-31T09:44:26.000Z",
        "moderationResponseTweetId": "1885262858738643284"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1885262858738643284"
  },
  {
    "tweetId": "1885345507310006523",
    "userId": "1593371548575928320",
    "username": "solanaspaces",
    "content": "Solana Spaces is back, powered by $STORE.\n\nThe mission: to activate e-commerce + global IRL stores for Solana and its ecosystem, delivering high-quality merch, products built for Solana, and early crypto education. https://t.co/yNoIkqkAdz",
    "curatorNotes": null,
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1885878510247350762",
    "createdAt": "2025-01-31T15:12:51.000Z",
    "submittedAt": "2025-02-03T04:23:21.184Z",
    "moderationHistory": [
      {
        "tweetId": "1885345507310006523",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-02-02T02:30:49.000Z",
        "moderationResponseTweetId": "1885878510247350762"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1885878510247350762"
  },
  {
    "tweetId": "1885762567177375823",
    "userId": "1651199844365766656",
    "username": "sendaifun",
    "content": "Now track projects built with or integrated into Solana Agent Kit, including:\n— Market cap\n— Mindshare\n\n+ NPM package downloads\n\nAll in yet another banger dashboard by Goat Index.\n\nNote: This is tracked independently by @GoatIndexAI and may not be exhaustive or fully accurate.",
    "curatorNotes": "@GoatIndexAI   track projects integrated with Solana Agent Kit powered by Goat Index",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1885882719890026924",
    "createdAt": "2025-02-01T18:50:06.000Z",
    "submittedAt": "2025-02-03T04:23:23.574Z",
    "moderationHistory": [
      {
        "tweetId": "1885762567177375823",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@GoatIndexAI   track projects integrated with Solana Agent Kit powered by Goat Index",
        "timestamp": "2025-02-02T02:47:33.000Z",
        "moderationResponseTweetId": "1885882719890026924"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1885882719890026924"
  },
  {
    "tweetId": "1885395150991479200",
    "userId": "1879106248765042688",
    "username": "lumolabsdotai",
    "content": "🌟 𝗟𝗨𝗠𝗢-𝗡𝗢𝗩𝗘𝗟-𝗗𝗦-𝗜𝗡𝗦𝗧𝗥𝗨𝗖𝗧 🌟\n\nPresenting to you, Solana's largest ever open-source AI Dataset: Lumo-Novel-DS-Instruct - curated by Lumo.\n\n- Datasources: 19+ authoritative references\n- Total QA Pairs: 95,127 (3.3x over predecessor)\n- Precision Improvement: 7.2x over predecessor\n- QA developed by category/information based chunking mechanism\n\nLINK: https://t.co/KGr2klYkXY",
    "curatorNotes": null,
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1886311656256421901",
    "createdAt": "2025-01-31T18:30:07.000Z",
    "submittedAt": "2025-02-03T07:12:35.216Z",
    "moderationHistory": [
      {
        "tweetId": "1885395150991479200",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-02-03T07:11:59.000Z",
        "moderationResponseTweetId": "1886311656256421901"
      },
      {
        "tweetId": "1885395150991479200",
        "feedId": "ai3",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-02-03T07:11:59.000Z",
        "moderationResponseTweetId": "1886311656256421901"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1886311656256421901"
  },
  {
    "tweetId": "1886624148975497238",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "NEW: Solana-based @moonwalkfitness is now live on @GooglePlay for Android users. https://t.co/70p3yzyscP",
    "curatorNotes": "@moonwalkfitness @GooglePlay",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1886644725530370161",
    "createdAt": "2025-02-04T03:53:43.000Z",
    "submittedAt": "2025-02-04T05:23:47.332Z",
    "moderationHistory": [
      {
        "tweetId": "1886624148975497238",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@moonwalkfitness @GooglePlay",
        "timestamp": "2025-02-04T05:15:29.000Z",
        "moderationResponseTweetId": "1886644725530370161"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1886644725530370161"
  },
  {
    "tweetId": "1886498470946857278",
    "userId": "1499809254227812360",
    "username": "solana_devs",
    "content": "gm solana developoooooors ⚓️⚓️⚓️\n\nnew Anchor framework docs just dropped: https://t.co/JLgSOVfvow https://t.co/MzXeFlQda0",
    "curatorNotes": null,
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1886645174216089926",
    "createdAt": "2025-02-03T19:34:19.000Z",
    "submittedAt": "2025-02-04T05:23:51.523Z",
    "moderationHistory": [
      {
        "tweetId": "1886498470946857278",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-02-04T05:17:16.000Z",
        "moderationResponseTweetId": "1886645174216089926"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1886645174216089926"
  },
  {
    "tweetId": "1886408880915104036",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "📊REPORT: @RaydiumProtocol surpasses @Uniswap in 30-day volume to become the #1 DEX across all chains, despite operating solely on @Solana.\n\n- Uniswap: $98 billion\n- Raydium: $122 billion https://t.co/qhdujw1rNQ",
    "curatorNotes": "@RaydiumProtocol @Uniswap @solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1886665364727324964",
    "createdAt": "2025-02-03T13:38:19.000Z",
    "submittedAt": "2025-02-04T06:52:22.248Z",
    "moderationHistory": [
      {
        "tweetId": "1886408880915104036",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@RaydiumProtocol @Uniswap @solana",
        "timestamp": "2025-02-04T06:37:30.000Z",
        "moderationResponseTweetId": "1886665364727324964"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1886665364727324964"
  },
  {
    "tweetId": "1886689902152069370",
    "userId": "2207129125",
    "username": "Cointelegraph",
    "content": "🇨🇦 TODAY: Canadian Stock Exchange-listed firm Sol Strategies acquires 21,200 $SOL, bringing total holdings to 189,968 $SOL valued at $63.7M CAD. https://t.co/RZ8bayioNv",
    "curatorNotes": null,
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1886717944367059401",
    "createdAt": "2025-02-04T08:15:00.000Z",
    "submittedAt": "2025-02-04T11:23:44.933Z",
    "moderationHistory": [
      {
        "tweetId": "1886689902152069370",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-02-04T10:06:26.000Z",
        "moderationResponseTweetId": "1886717944367059401"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1886717944367059401"
  },
  {
    "tweetId": "1886749988320850108",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨JUST IN: Solana memecoin @pain has raised 187,774 SOL ($39.2M) in a presale over two days, making it one of the largest raises by a memecoin project. https://t.co/CnjwniT9oa",
    "curatorNotes": "@pain   $PAIN has one of the largest raises in meme history",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1886793713797804463",
    "createdAt": "2025-02-04T12:13:45.000Z",
    "submittedAt": "2025-02-04T15:43:29.507Z",
    "moderationHistory": [
      {
        "tweetId": "1886749988320850108",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@pain   $PAIN has one of the largest raises in meme history",
        "timestamp": "2025-02-04T15:07:30.000Z",
        "moderationResponseTweetId": "1886793713797804463"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1886793713797804463"
  },
  {
    "tweetId": "1886842908713660728",
    "userId": "1787557140212727809",
    "username": "Enron",
    "content": "$ENRON is here. This will be the fuel that powers our journey. Join us now on Solana. \n\nCA: BktHEAc2WS8TQi2vmavn1rA4L1WJuwF3Vkk3DnwwARti https://t.co/3TvYDDgfeA",
    "curatorNotes": "ENRON one of the biggest scams of all American history is back with a rebrand and a coin on Solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1886858607498813606",
    "createdAt": "2025-02-04T18:22:59.000Z",
    "submittedAt": "2025-02-04T19:47:16.782Z",
    "moderationHistory": [
      {
        "tweetId": "1886842908713660728",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "ENRON one of the biggest scams of all American history is back with a rebrand and a coin on Solana",
        "timestamp": "2025-02-04T19:25:22.000Z",
        "moderationResponseTweetId": "1886858607498813606"
      },
      {
        "tweetId": "1886842908713660728",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": "ENRON one of the biggest scams of all American history is back with a rebrand and a coin on Solana",
        "timestamp": "2025-02-04T19:25:22.000Z",
        "moderationResponseTweetId": "1886858607498813606"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1886858607498813606"
  },
  {
    "tweetId": "1886748122849726898",
    "userId": "1568425000935518209",
    "username": "helium_mobile",
    "content": "It’s HERE. The first FREE phone plan ☁️.\n\nInvite-only. Break 🆓 from big telco and join the waitlist ➡️ https://t.co/VeTeSgVaEZ https://t.co/tflqWkxHGM",
    "curatorNotes": "Helium Mobile offers the first free phone plan covering \"The Largest US 5G Network.\"",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1886860257902633409",
    "createdAt": "2025-02-04T12:06:21.000Z",
    "submittedAt": "2025-02-04T19:47:19.164Z",
    "moderationHistory": [
      {
        "tweetId": "1886748122849726898",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "Helium Mobile offers the first free phone plan covering \"The Largest US 5G Network.\"",
        "timestamp": "2025-02-04T19:31:56.000Z",
        "moderationResponseTweetId": "1886860257902633409"
      },
      {
        "tweetId": "1886748122849726898",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": "Helium Mobile offers the first free phone plan covering \"The Largest US 5G Network.\"",
        "timestamp": "2025-02-04T19:31:56.000Z",
        "moderationResponseTweetId": "1886860257902633409"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1886860257902633409"
  },
  {
    "tweetId": "1886799395435298976",
    "userId": "1839742030890631168",
    "username": "ramzyyalii",
    "content": "I am thrilled to share that I have joined the @SolanaFndn as Defi Growth Lead!\n\nWith Firedancer on the way, unprecedented institutional adoption, increased blockspace and transaction speeds, congestion fixes and a wave of talented builders entering the space, Solana is approaching a new era of scalability and efficiency.\n\nThe energy around projects like @JupiterExchange, @Perena__ , @DriftProtocol, @jito_sol, @KaminoFinance, @RaydiumProtocol and @marginfi is electric, and I am excited to help scale the next generation of DeFi applications on Solana.\n\nHuge thanks to @calilyliu, @bennybitcoins, @nickducoff, @DanPaul000, @jnwng, @voteforpedrito, Matt, and the entire Solana Foundation team for the opportunity.\n\nIf you’re building in DeFi on Solana, let’s connect!",
    "curatorNotes": "@SolanaFndn",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1886860654268834246",
    "createdAt": "2025-02-04T15:30:05.000Z",
    "submittedAt": "2025-02-04T19:47:20.700Z",
    "moderationHistory": [
      {
        "tweetId": "1886799395435298976",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@SolanaFndn",
        "timestamp": "2025-02-04T19:33:30.000Z",
        "moderationResponseTweetId": "1886860654268834246"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1886860654268834246"
  },
  {
    "tweetId": "1887024493006135407",
    "userId": "1329286069028675585",
    "username": "AvbNear",
    "content": "Few takeaways from this convo:\n\n* Solana has been ‘captured’ by degens. Better tech solutions were created but people actually wanted the chaos casino over anything else. \n* Solana is now focused on stable coins. With Trump, a trillion dollars are coming onchain. \n* Illia doesn’t see any difference between a ‘crypto start-up’ and a startup (anyone that solves a real problem’ that uses web3 as part of the tech stack, obviously favouring the latter and positive about Trump Pump (regulatory certainty)\n* Toly understands power of product, users, and GTM. Concedes that even if you have a better solution, no products and no users means … no products and no users! \n* Toly has a bewildering basic and simplistic outlook of AI\n* Illia is all in on AI, a trillion agents are coming onchain. \n\nMain takeaway - Solana has the challenge of breaking out of Degen playground into more mass market apps, stablecoins are the right place to focus. NEAR is seemingly falling behind on degens, and products/users but is unfazed - perhaps there will be a DeepSeek moment for Near?\n\nGoood to see friendly banter. Kinda low energy tbh but overall great sport to have two founders talk openly like that. More exchanges like this would be great \n\nhttps://t.co/Ds3ysMzrNv",
    "curatorNotes": "a good summary of the youtube talk",
    "curatorId": "1603425135356157953",
    "curatorUsername": "elliot_braem",
    "curatorTweetId": "1887028155661344922",
    "createdAt": "2025-02-05T06:24:33.000Z",
    "submittedAt": "2025-02-05T06:40:05.223Z",
    "moderationHistory": [
      {
        "tweetId": "1887024493006135407",
        "feedId": "near",
        "adminId": "elliot_braem",
        "action": "approve",
        "note": "a good summary of the youtube talk",
        "timestamp": "2025-02-05T06:39:06.000Z"
      }
    ],
    "status": "pending"
  },
  {
    "tweetId": "1887088142987014439",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "JUST IN: @pumpdotfun surpasses @Circle, the issuer of $USDC, in 24-hour revenue. https://t.co/U48V4dsoik",
    "curatorNotes": "@pumpdotfun @circle",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1887374661564219843",
    "createdAt": "2025-02-05T10:37:28.000Z",
    "submittedAt": "2025-02-06T06:01:35.544Z",
    "moderationHistory": [
      {
        "tweetId": "1887088142987014439",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@pumpdotfun @circle",
        "timestamp": "2025-02-06T05:35:59.000Z",
        "moderationResponseTweetId": "1887374661564219843"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1887374661564219843"
  },
  {
    "tweetId": "1887367274300137888",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "NEW: @Solana Agent Kit introduces support for Python language, expanding AI agent development to 10M+ Python devs. https://t.co/Ov0Yssxq75",
    "curatorNotes": "@solana @sendaifun @AgentiPy    SEND AI / solana agent kit adds support for Python",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1887377979908759807",
    "createdAt": "2025-02-06T05:06:38.000Z",
    "submittedAt": "2025-02-06T06:01:37.297Z",
    "moderationHistory": [
      {
        "tweetId": "1887367274300137888",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana @sendaifun @AgentiPy    SEND AI / solana agent kit adds support for Python",
        "timestamp": "2025-02-06T05:49:10.000Z",
        "moderationResponseTweetId": "1887377979908759807"
      },
      {
        "tweetId": "1887367274300137888",
        "feedId": "ai3",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana @sendaifun @AgentiPy    SEND AI / solana agent kit adds support for Python",
        "timestamp": "2025-02-06T05:49:10.000Z",
        "moderationResponseTweetId": "1887377979908759807"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1887377979908759807"
  },
  {
    "tweetId": "1887149011163041899",
    "userId": "412587524",
    "username": "MessariCrypto",
    "content": "Is @solana's Q4 the best in blockchain history?\n\n- Chain GDP +213% to $840M\n- TVL hits $8.6B\n- DEX volume +150% to $3.3B daily\n- Liquid-staked SOL +33% to 11.2%\n- 18 Firedancer validators\n- Stablecoins +36% to $5.1B\n- DePIN, PayFi, and more\n\nSolana Q4 Highlights 👇\nhttps://t.co/pFMEv6E6u8",
    "curatorNotes": "@solana @NaytheForceBwU",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1887379155903521186",
    "createdAt": "2025-02-05T14:39:20.000Z",
    "submittedAt": "2025-02-06T06:01:41.699Z",
    "moderationHistory": [
      {
        "tweetId": "1887149011163041899",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana @NaytheForceBwU",
        "timestamp": "2025-02-06T05:53:51.000Z",
        "moderationResponseTweetId": "1887379155903521186"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1887379155903521186"
  },
  {
    "tweetId": "1887230617542402167",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "📊 REPORT: Total app revenue on @Solana surged 213% in Q4 2024, rising from $268M to $840M.\n\n-• Pumpdotfun: $235M\n-• Photon: $140M\n-• Raydium: $74M\n\nNovember alone was the biggest month, generating $367M in app revenue. https://t.co/nmmLVNz2ar",
    "curatorNotes": "@solana @pumpdotfun @MessariCrypto @tradewithPhoton @RaydiumProtocol @aeyakovenko @rajgokal",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1887405589623365729",
    "createdAt": "2025-02-05T20:03:36.000Z",
    "submittedAt": "2025-02-06T07:39:45.271Z",
    "moderationHistory": [
      {
        "tweetId": "1887230617542402167",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana @pumpdotfun @MessariCrypto @tradewithPhoton @RaydiumProtocol @aeyakovenko @rajgokal",
        "timestamp": "2025-02-06T07:38:53.000Z",
        "moderationResponseTweetId": "1887405589623365729"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1887405589623365729"
  },
  {
    "tweetId": "1887149924904497438",
    "userId": "1651199844365766656",
    "username": "sendaifun",
    "content": "Solana Agent Kit goes cross-chain! 🤖\n\nAI Agents can now fund their Solana wallets from 7+ chains like Ethereum, Base, Arbitrum, and more!\n\nNot just that, DeFAI agents can also:\n–– Bridge to Solana from EVM chains\n–– Bridge from Solana to EVM chains\n–– Swap on Solana",
    "curatorNotes": null,
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1887486717458075839",
    "createdAt": "2025-02-05T14:42:58.000Z",
    "submittedAt": "2025-02-06T13:10:13.221Z",
    "moderationHistory": [
      {
        "tweetId": "1887149924904497438",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-02-06T13:01:15.000Z",
        "moderationResponseTweetId": "1887486717458075839"
      },
      {
        "tweetId": "1887149924904497438",
        "feedId": "ai3",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-02-06T13:01:15.000Z",
        "moderationResponseTweetId": "1887486717458075839"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1887486717458075839"
  },
  {
    "tweetId": "1887627737822863689",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨BREAKING: @EricBalchunas, senior ETF analyst at Bloomberg, called the SEC’s acknowledgment of Grayscale’s Solana spot ETF filing a major shift. \n\nHe noted it’s the first time the SEC has recognized an ETF tied to an asset previously labeled a “security,” just six weeks after the SEC told CBOE to withdraw its Solana filing.",
    "curatorNotes": "@EricBalchunas",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1887713669896937696",
    "createdAt": "2025-02-06T22:21:37.000Z",
    "submittedAt": "2025-02-07T04:42:28.804Z",
    "moderationHistory": [
      {
        "tweetId": "1887627737822863689",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@EricBalchunas",
        "timestamp": "2025-02-07T04:03:05.000Z",
        "moderationResponseTweetId": "1887713669896937696"
      },
      {
        "tweetId": "1887627737822863689",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@EricBalchunas",
        "timestamp": "2025-02-07T04:03:05.000Z",
        "moderationResponseTweetId": "1887713669896937696"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1887713669896937696"
  },
  {
    "tweetId": "1887555746109530365",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "NEW: @phantom LAUNCHES MULTI-CURRENCY SUPPORT\n\n https://t.co/hL0Ge20VUh",
    "curatorNotes": "@phantom",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1887794420663357908",
    "createdAt": "2025-02-06T17:35:33.000Z",
    "submittedAt": "2025-02-07T09:24:26.456Z",
    "moderationHistory": [
      {
        "tweetId": "1887555746109530365",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@phantom",
        "timestamp": "2025-02-07T09:23:58.000Z",
        "moderationResponseTweetId": "1887794420663357908"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1887794420663357908"
  },
  {
    "tweetId": "1887811465773461936",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨News: SEC Changes Tune on 19b-4s, Acknowledges Grayscale SOL Spot ETF Filing\n\nhttps://t.co/Mr3cHm9ugS",
    "curatorNotes": null,
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1888074879670620239",
    "createdAt": "2025-02-07T10:31:41.000Z",
    "submittedAt": "2025-02-08T04:36:24.310Z",
    "moderationHistory": [
      {
        "tweetId": "1887811465773461936",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-02-08T03:58:24.000Z",
        "moderationResponseTweetId": "1888074879670620239"
      },
      {
        "tweetId": "1887811465773461936",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-02-08T03:58:24.000Z",
        "moderationResponseTweetId": "1888074879670620239"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1888074879670620239"
  },
  {
    "tweetId": "1888782865443278984",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "NEW: MEMECOIN TRADING APP @moonshot FLIPS @coinbase IN IOS @AppStore FINANCE APP RANKINGS IN THE U.S. https://t.co/wt4r07IwyH",
    "curatorNotes": "@moonshot @coinbase @AppStore",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1888806229298028760",
    "createdAt": "2025-02-10T02:51:41.000Z",
    "submittedAt": "2025-02-10T04:38:16.758Z",
    "moderationHistory": [
      {
        "tweetId": "1888782865443278984",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@moonshot @coinbase @AppStore",
        "timestamp": "2025-02-10T04:24:32.000Z",
        "moderationResponseTweetId": "1888806229298028760"
      },
      {
        "tweetId": "1888782865443278984",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@moonshot @coinbase @AppStore",
        "timestamp": "2025-02-10T04:24:32.000Z",
        "moderationResponseTweetId": "1888806229298028760"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1888806229298028760"
  },
  {
    "tweetId": "1888869952737955884",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "📊REPORT: Over $200 million has been bridged from other chains to @Solana in the last 7 days.\n\n(This includes over $100 million from Ethereum to @Solana alone) https://t.co/XmKtAHVevp",
    "curatorNotes": "@solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1888921688953487826",
    "createdAt": "2025-02-10T08:37:44.000Z",
    "submittedAt": "2025-02-10T12:46:38.127Z",
    "moderationHistory": [
      {
        "tweetId": "1888869952737955884",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana",
        "timestamp": "2025-02-10T12:03:19.000Z",
        "moderationResponseTweetId": "1888921688953487826"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1888921688953487826"
  },
  {
    "tweetId": "1888866649224413507",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨BREAKING: @Solana surpasses Ethereum in 7-day revenue. https://t.co/UhID1X36in",
    "curatorNotes": "@solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1888922254597333312",
    "createdAt": "2025-02-10T08:24:37.000Z",
    "submittedAt": "2025-02-10T12:46:40.954Z",
    "moderationHistory": [
      {
        "tweetId": "1888866649224413507",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana",
        "timestamp": "2025-02-10T12:05:34.000Z",
        "moderationResponseTweetId": "1888922254597333312"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1888922254597333312"
  },
  {
    "tweetId": "1888770142961586203",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "NEW: @moonshot AND @phantom FLIP ETHEREUM IN 24H REVENUE https://t.co/BYardcfaJx",
    "curatorNotes": "@moonshot @phantom",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1889158322437206417",
    "createdAt": "2025-02-10T02:01:08.000Z",
    "submittedAt": "2025-02-11T03:46:37.390Z",
    "moderationHistory": [
      {
        "tweetId": "1888770142961586203",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@moonshot @phantom",
        "timestamp": "2025-02-11T03:43:37.000Z",
        "moderationResponseTweetId": "1889158322437206417"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1889158322437206417"
  },
  {
    "tweetId": "1889012929179091392",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "NEW: @solana_devs INTRODUCES “SOLANA DEVS TOUR: INDIA 🇮🇳” - “21 CITIES IN INDIA FROM FEB. 13TH TO MAR. 28TH”\n\n https://t.co/EiquZxZMN4",
    "curatorNotes": "@solana_devs",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1889163154758029695",
    "createdAt": "2025-02-10T18:05:53.000Z",
    "submittedAt": "2025-02-11T04:03:45.432Z",
    "moderationHistory": [
      {
        "tweetId": "1889012929179091392",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana_devs",
        "timestamp": "2025-02-11T04:02:49.000Z",
        "moderationResponseTweetId": "1889163154758029695"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1889163154758029695"
  },
  {
    "tweetId": "1888966114140397728",
    "userId": "1864224910572441600",
    "username": "jup_mobile",
    "content": "Jupiter Mobile is coming to @solanamobile.\n\nWe're looking for beta testers that use Saga as their primary device and would be willing to help us iron out the upcoming release.\n\nIf that's you, please let us know 👇 https://t.co/yjepx22WOT",
    "curatorNotes": "@solanamobile",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1889163210785423628",
    "createdAt": "2025-02-10T14:59:51.000Z",
    "submittedAt": "2025-02-11T04:03:47.330Z",
    "moderationHistory": [
      {
        "tweetId": "1888966114140397728",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solanamobile",
        "timestamp": "2025-02-11T04:03:03.000Z",
        "moderationResponseTweetId": "1889163210785423628"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1889163210785423628"
  },
  {
    "tweetId": "1889323695513997497",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨BREAKING: Solana is now leading DEX trading volume for the second straight month, surpassing Ethereum and all its Layer 2s combined—with 17 days still remaining in February. https://t.co/dhAyMbJjh5",
    "curatorNotes": null,
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1889330449257996776",
    "createdAt": "2025-02-11T14:40:45.000Z",
    "submittedAt": "2025-02-11T15:32:43.964Z",
    "moderationHistory": [
      {
        "tweetId": "1889323695513997497",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-02-11T15:07:35.000Z",
        "moderationResponseTweetId": "1889330449257996776"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1889330449257996776"
  },
  {
    "tweetId": "1889328943104475339",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "NEW: $FDUSD stablecoin supply on @solana surpasses $100 million. https://t.co/ifhuxlIPTN",
    "curatorNotes": "@solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1889330566807597177",
    "createdAt": "2025-02-11T15:01:36.000Z",
    "submittedAt": "2025-02-11T15:32:45.641Z",
    "moderationHistory": [
      {
        "tweetId": "1889328943104475339",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana",
        "timestamp": "2025-02-11T15:08:03.000Z",
        "moderationResponseTweetId": "1889330566807597177"
      },
      {
        "tweetId": "1889328943104475339",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana",
        "timestamp": "2025-02-11T15:08:03.000Z",
        "moderationResponseTweetId": "1889330566807597177"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1889330566807597177"
  },
  {
    "tweetId": "1889365020393496910",
    "userId": "1438365197505232902",
    "username": "virtuals_io",
    "content": "Virtuals is now on @solana !\n\nWe're thrilled to announce that Virtuals Protocol has officially landed on Solana, marking a significant milestone in our mission to empower Virtuals Nation builders and drive agentic innovation across multiple ecosystems.\n\nBuy, trade and create AI Agents now at https://t.co/fj1w7BM8K5",
    "curatorNotes": "@solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1889369323673935929",
    "createdAt": "2025-02-11T17:24:58.000Z",
    "submittedAt": "2025-02-11T18:20:53.195Z",
    "moderationHistory": [
      {
        "tweetId": "1889365020393496910",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana",
        "timestamp": "2025-02-11T17:42:04.000Z",
        "moderationResponseTweetId": "1889369323673935929"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1889369323673935929"
  },
  {
    "tweetId": "1889370763053916482",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "BREAKING: SEC ACKNOWLEDGES FILING FOR CANARY SPOT SOLANA ETF https://t.co/uLcA5wW6bB",
    "curatorNotes": null,
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1889372083148431854",
    "createdAt": "2025-02-11T17:47:47.000Z",
    "submittedAt": "2025-02-11T18:20:55.910Z",
    "moderationHistory": [
      {
        "tweetId": "1889370763053916482",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-02-11T17:53:02.000Z",
        "moderationResponseTweetId": "1889372083148431854"
      },
      {
        "tweetId": "1889370763053916482",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-02-11T17:53:02.000Z",
        "moderationResponseTweetId": "1889372083148431854"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1889372083148431854"
  },
  {
    "tweetId": "1888948029031419947",
    "userId": "952921795316912133",
    "username": "StaniKulechov",
    "content": "The state of Solana DeFi:\n\n- Copycat Aave's old tech\n- Slap a half baked UI\n- Restrict also UK users from using it\n- Solana foundation president calls it a better product\n\nExpect people to buy the bluff.",
    "curatorNotes": "Stani founder of Aave/Lens - twitter beefin - with Toly founder of Solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1889375015851941897",
    "createdAt": "2025-02-10T13:47:59.000Z",
    "submittedAt": "2025-02-11T18:20:54.476Z",
    "moderationHistory": [
      {
        "tweetId": "1888948029031419947",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "Stani founder of Aave/Lens - twitter beefin - with Toly founder of Solana",
        "timestamp": "2025-02-11T18:04:41.000Z",
        "moderationResponseTweetId": "1889375015851941897"
      },
      {
        "tweetId": "1888948029031419947",
        "feedId": "ethereum",
        "adminId": "plugrel",
        "action": "approve",
        "note": "Stani founder of Aave/Lens - twitter beefin - with Toly founder of Solana",
        "timestamp": "2025-02-11T18:04:41.000Z",
        "moderationResponseTweetId": "1889375015851941897"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1889375015851941897"
  },
  {
    "tweetId": "1889407593657016517",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨BREAKING: 🇺🇸 The SEC has officially acknowledged the following Spot @Solana ETF filings today:\n\n•Canary Solana ETF\n•@vaneck_us Solana ETF\n•@BitwiseInvest Solana ETF\n•@21Shares Solana ETF https://t.co/V1by9sPNpb",
    "curatorNotes": "@solana @vaneck_us @BitwiseInvest @21Shares",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1889523922824995279",
    "createdAt": "2025-02-11T20:14:08.000Z",
    "submittedAt": "2025-02-12T03:56:41.461Z",
    "moderationHistory": [
      {
        "tweetId": "1889407593657016517",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana @vaneck_us @BitwiseInvest @21Shares",
        "timestamp": "2025-02-12T03:56:23.000Z",
        "moderationResponseTweetId": "1889523922824995279"
      },
      {
        "tweetId": "1889407593657016517",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana @vaneck_us @BitwiseInvest @21Shares",
        "timestamp": "2025-02-12T03:56:23.000Z",
        "moderationResponseTweetId": "1889523922824995279"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1889523922824995279"
  },
  {
    "tweetId": "1889380558989574240",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨BREAKING: Franklin Templeton, managing over $1.2 trillion in assets, has filed a “FRANKLIN @SOLANA TRUST” in Delaware.\n\nThis signals that a spot ETF filing may be coming, as this was the process followed by Bitwise and other ETF filings. https://t.co/9t9uUUg2Kv",
    "curatorNotes": "@solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1889524431770554844",
    "createdAt": "2025-02-11T18:26:42.000Z",
    "submittedAt": "2025-02-12T03:58:41.170Z",
    "moderationHistory": [
      {
        "tweetId": "1889380558989574240",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana",
        "timestamp": "2025-02-12T03:58:24.000Z",
        "moderationResponseTweetId": "1889524431770554844"
      },
      {
        "tweetId": "1889380558989574240",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana",
        "timestamp": "2025-02-12T03:58:24.000Z",
        "moderationResponseTweetId": "1889524431770554844"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1889524431770554844"
  },
  {
    "tweetId": "1889458874014388331",
    "userId": "2882819127",
    "username": "templecrash",
    "content": "Agent creation update for @ParallelColony // \n\nColony is an AI simulation game powered by $PRIME and built on @solana https://t.co/dDkaoYnYyY",
    "curatorNotes": "@ParallelColony @solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1889524611726877072",
    "createdAt": "2025-02-11T23:37:54.000Z",
    "submittedAt": "2025-02-12T03:59:41.380Z",
    "moderationHistory": [
      {
        "tweetId": "1889458874014388331",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@ParallelColony @solana",
        "timestamp": "2025-02-12T03:59:07.000Z",
        "moderationResponseTweetId": "1889524611726877072"
      },
      {
        "tweetId": "1889458874014388331",
        "feedId": "ai3",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@ParallelColony @solana",
        "timestamp": "2025-02-12T03:59:07.000Z",
        "moderationResponseTweetId": "1889524611726877072"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1889524611726877072"
  },
  {
    "tweetId": "1889477976493867314",
    "userId": "1309886201944473600",
    "username": "0xMert_",
    "content": "SIMD96 goes live on Solana in a few hours\n\nwhat is it?\n\nbrief context: validators make money in 3 ways\n\n1) issuance \n2) MEV\n3) priority fees\n\nwhen validators say they take no commission, they mean they take a 0% cut on either issuance or MEV or both\n\nfor example, Helius passes the entirety of both issuance and MEV  rewards back to you without taking a cut so your APY from those are maximized\n\nbut the priority fees are generally not shared <--- important\n\n(at least not shared in protocol)\n\nin fact, what happens is when a priority fee is paid, 50% of it is burned, and 50% goes to the validator that processed those txns\n\nSIMD96 removes the burn such that 100% of the fee goes to the validator instead\n\n(you might ask why? basically, the burn incentives side deals that cut out both the stakers and the protocol itself, so it's long-term incentive incompatible — you can debate whether that's good or bad, but that's not the point of this post\n\nthere is also a strong proposal live right now around reducing issuance, which I expect to pass)\n\nthe point is this: now validators will make extra income from those fees — but the stakers will not benefit unless the validator shares those rewards as well (recall above how only issuance and MEV are shared today mostly)\n\nthere is currently no great method for sharing these rewards back with the stakers, but Jito has a TipRouter coming soon which will largely fix this\n\nfor now, what @heliuslabs validator will do is share a % of those rewards by directly depositing them into the hSOL LST pool\n\nso hSOL holders will benefit from a boosted APY from the newly deposited hSOL block rewards (in proportion to how much hSOL is held, we will not be giving out the rewards from native stakers to liquid stakers) — there will also be a dashboard where you can track this transparently\n\nthis will be the state of things until Jito's TipRouter goes live, upon which a % of those rewards will be shared with all stakers, native or liquid\n\nso TL;DR — burn goes away, validators make more from priority fees, and Helius will share those rewards w hSOL holders at first and then all native stakers once Jito's tip sharing system is live (ETA: few weeks)",
    "curatorNotes": null,
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1889551938464940455",
    "createdAt": "2025-02-12T00:53:49.000Z",
    "submittedAt": "2025-02-12T06:38:31.374Z",
    "moderationHistory": [
      {
        "tweetId": "1889477976493867314",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-02-12T05:47:42.000Z",
        "moderationResponseTweetId": "1889551938464940455"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1889551938464940455"
  },
  {
    "tweetId": "1889417596057137524",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨LATEST: @MEFndn to distribute 16.4M unclaimed $ME on Feb 14 to wallets that staked $ME. https://t.co/xeaJDVfnxY",
    "curatorNotes": "@MEFndn",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1889551999559159911",
    "createdAt": "2025-02-11T20:53:53.000Z",
    "submittedAt": "2025-02-12T06:38:32.931Z",
    "moderationHistory": [
      {
        "tweetId": "1889417596057137524",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@MEFndn",
        "timestamp": "2025-02-12T05:47:57.000Z",
        "moderationResponseTweetId": "1889551999559159911"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1889551999559159911"
  },
  {
    "tweetId": "1889656629827707270",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "NEW: SOLANA-BASED TELEGRAM TRADING BOTS @bonkbot_io AND @gmgnai FLIP ETHEREUM IN 7-DAY REVENUE https://t.co/gIy4KGX38V",
    "curatorNotes": "@bonkbot_io @gmgnai",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1889657168174985484",
    "createdAt": "2025-02-12T12:43:43.000Z",
    "submittedAt": "2025-02-12T13:23:28.894Z",
    "moderationHistory": [
      {
        "tweetId": "1889656629827707270",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@bonkbot_io @gmgnai",
        "timestamp": "2025-02-12T12:45:51.000Z",
        "moderationResponseTweetId": "1889657168174985484"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1889657168174985484"
  },
  {
    "tweetId": "1889680566166900893",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨BREAKING BIG: Franklin Templeton (@FTDA_US), with over $1.3 trillion in assets under management, officially launches its tokenized money market fund (FOBXX) on @Solana. https://t.co/LbaLWWF8hV",
    "curatorNotes": "@FTDA_US @solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1889955165391954029",
    "createdAt": "2025-02-12T14:18:50.000Z",
    "submittedAt": "2025-02-13T08:37:40.430Z",
    "moderationHistory": [
      {
        "tweetId": "1889680566166900893",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@FTDA_US @solana",
        "timestamp": "2025-02-13T08:29:59.000Z",
        "moderationResponseTweetId": "1889955165391954029"
      },
      {
        "tweetId": "1889680566166900893",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@FTDA_US @solana",
        "timestamp": "2025-02-13T08:29:59.000Z",
        "moderationResponseTweetId": "1889955165391954029"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1889955165391954029"
  },
  {
    "tweetId": "1890027445061132356",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨BREAKING: Deutsche Bank-backed @taurus_hq integrates @Solana for enterprise-grade custody &amp; tokenization.\n\n https://t.co/WG9zQAJry1",
    "curatorNotes": "@taurus_hq @solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1890035769294921938",
    "createdAt": "2025-02-13T13:17:12.000Z",
    "submittedAt": "2025-02-13T13:58:31.592Z",
    "moderationHistory": [
      {
        "tweetId": "1890027445061132356",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@taurus_hq @solana",
        "timestamp": "2025-02-13T13:50:17.000Z",
        "moderationResponseTweetId": "1890035769294921938"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1890035769294921938"
  },
  {
    "tweetId": "1890001028722176118",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨News: @sendaifun has launched Create Solana Agent (CSA), an open-source CLI tool that enables users to build a ChatGPT-style interface for over 50 Solana actions. Powered by Langchain, Claude, and Solana Agent Kit.\n https://t.co/0E9fS60XHC",
    "curatorNotes": "@sendaifun",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1890036501809082674",
    "createdAt": "2025-02-13T11:32:14.000Z",
    "submittedAt": "2025-02-13T13:58:33.576Z",
    "moderationHistory": [
      {
        "tweetId": "1890001028722176118",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@sendaifun",
        "timestamp": "2025-02-13T13:53:11.000Z",
        "moderationResponseTweetId": "1890036501809082674"
      },
      {
        "tweetId": "1890001028722176118",
        "feedId": "ai3",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@sendaifun",
        "timestamp": "2025-02-13T13:53:11.000Z",
        "moderationResponseTweetId": "1890036501809082674"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1890036501809082674"
  },
  {
    "tweetId": "1890038736169386440",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "This April, we're hosting @SolanaCrossroad 🇹🇷 \n\n✅ Top 100 @Solana teams\n✅ 100+ Investors\n✅ 4,000 Solana enthusiasts\n\n50% on @SolanaCrossroad tickets for a limited time 👀\n\n🎟️ Use code: BUILDERS → https://t.co/UktTiM9lZ2 https://t.co/u8DNsbn0aw",
    "curatorNotes": "@SolanaCrossroad @solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1890308203214430621",
    "createdAt": "2025-02-13T14:02:04.000Z",
    "submittedAt": "2025-02-14T07:53:09.593Z",
    "moderationHistory": [
      {
        "tweetId": "1890038736169386440",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@SolanaCrossroad @solana",
        "timestamp": "2025-02-14T07:52:50.000Z",
        "moderationResponseTweetId": "1890308203214430621"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1890308203214430621"
  },
  {
    "tweetId": "1890090177315344407",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "BREAKING: @JupiterExchange ANNOUNCES THAT BUYBACKS START ON MONDAY - \"50% OF ALL PROTOCOL FEES WILL GO TOWARDS BUYING $JUP AND LOCKING IT FOR 3 YEARS\" https://t.co/7mOylwxovE",
    "curatorNotes": "@JupiterExchange",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1890308627535392931",
    "createdAt": "2025-02-13T17:26:29.000Z",
    "submittedAt": "2025-02-14T07:55:09.741Z",
    "moderationHistory": [
      {
        "tweetId": "1890090177315344407",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@JupiterExchange",
        "timestamp": "2025-02-14T07:54:31.000Z",
        "moderationResponseTweetId": "1890308627535392931"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1890308627535392931"
  },
  {
    "tweetId": "1890082282364629239",
    "userId": "1405701429646430212",
    "username": "doodles",
    "content": "introducing $DOOD, the official token of Doodles.\n\nthe creative revolution is here. https://t.co/123ksyVSUH",
    "curatorNotes": "classic Ethereum collection Doodles launches $DOOD token on Solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1890308938241044840",
    "createdAt": "2025-02-13T16:55:06.000Z",
    "submittedAt": "2025-02-14T07:56:11.079Z",
    "moderationHistory": [
      {
        "tweetId": "1890082282364629239",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "classic Ethereum collection Doodles launches $DOOD token on Solana",
        "timestamp": "2025-02-14T07:55:45.000Z",
        "moderationResponseTweetId": "1890308938241044840"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1890308938241044840"
  },
  {
    "tweetId": "1890553433716850827",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "NEW: ARGENTINA PRESIDENT @JMilei’S SOLANA-BASED TOKEN NUKES BELOW $1B FDV - OVER 80% OF TOKEN’S SUPPLY WAS HELD BY A CLUSTER OF WALLETS, PER @bubblemaps https://t.co/v80EaY8Lib",
    "curatorNotes": "@JMilei @bubblemaps",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1890711389959823549",
    "createdAt": "2025-02-15T00:07:18.000Z",
    "submittedAt": "2025-02-15T10:35:48.013Z",
    "moderationHistory": [
      {
        "tweetId": "1890553433716850827",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@JMilei @bubblemaps",
        "timestamp": "2025-02-15T10:34:57.000Z",
        "moderationResponseTweetId": "1890711389959823549"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1890711389959823549"
  },
  {
    "tweetId": "1890477564080058813",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "BREAKING: @RobinhoodApp LISTS SOLANA-BASED $PYTH (@PythNetwork) https://t.co/MWsjDRf1Yi",
    "curatorNotes": "@RobinhoodApp @PythNetwork",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1890718195117429099",
    "createdAt": "2025-02-14T19:05:49.000Z",
    "submittedAt": "2025-02-15T11:04:34.461Z",
    "moderationHistory": [
      {
        "tweetId": "1890477564080058813",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@RobinhoodApp @PythNetwork",
        "timestamp": "2025-02-15T11:02:00.000Z",
        "moderationResponseTweetId": "1890718195117429099"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1890718195117429099"
  },
  {
    "tweetId": "1891588509128888432",
    "userId": "229543110",
    "username": "nickfrosty",
    "content": "introducing gill: the new javascript/typescript client library to interact with the @solana blockchain\n\n- fully compatible with web3js v2\n- tree shakable\n- lightweight\n- and numerous quality of life improvements for devs\n\nlets dive in 👇 https://t.co/uCBUyxQhHX",
    "curatorNotes": "@solana @solana_devs @anza_xyz",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1891601040836870640",
    "createdAt": "2025-02-17T20:40:19.000Z",
    "submittedAt": "2025-02-17T21:37:11.520Z",
    "moderationHistory": [
      {
        "tweetId": "1891588509128888432",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana @solana_devs @anza_xyz",
        "timestamp": "2025-02-17T21:30:07.000Z",
        "moderationResponseTweetId": "1891601040836870640"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1891601040836870640"
  },
  {
    "tweetId": "1891668267447550332",
    "userId": "1505874016761831430",
    "username": "DegenerateNews",
    "content": "BREAKING: @MeteoraAG’S @hellochow RESIGNS https://t.co/UuA44mSmZr",
    "curatorNotes": "@MeteoraAG @hellochow",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1891757020098777162",
    "createdAt": "2025-02-18T01:57:15.000Z",
    "submittedAt": "2025-02-18T08:00:48.962Z",
    "moderationHistory": [
      {
        "tweetId": "1891668267447550332",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@MeteoraAG @hellochow",
        "timestamp": "2025-02-18T07:49:55.000Z",
        "moderationResponseTweetId": "1891757020098777162"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1891757020098777162"
  },
  {
    "tweetId": "1891858421818794251",
    "userId": "1433615915124465671",
    "username": "saydialect",
    "content": "Only 5% of blinks &amp; their capabilities have been written about. It’s time to share the other 95%\n\nComing soon https://t.co/IC3urLEJTd",
    "curatorNotes": "@MarinadeFinance @jito_sol @Backpack @uselulo @HedgehogMarket @helium @bonk_inu @solana @tensor_hq @drip_haus   Dialect teases increase Blinks functionality",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1891866773059781088",
    "createdAt": "2025-02-18T14:32:51.000Z",
    "submittedAt": "2025-02-18T15:06:48.671Z",
    "moderationHistory": [
      {
        "tweetId": "1891858421818794251",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@MarinadeFinance @jito_sol @Backpack @uselulo @HedgehogMarket @helium @bonk_inu @solana @tensor_hq @drip_haus   Dialect teases increase Blinks functionality",
        "timestamp": "2025-02-18T15:06:02.000Z",
        "moderationResponseTweetId": "1891866773059781088"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1891866773059781088"
  },
  {
    "tweetId": "1892114612314665415",
    "userId": "20384312",
    "username": "DanPaul000",
    "content": "There are currently 409 open jobs listed on https://t.co/WfVIFxGZ5Q.\n\n405 of these are in the ecosystem, 4 of these are at @SolanaFndn.\n\n100x ratio of ecosystem growth/hiring to Foundation's internal growth is amazing!  Let's keep building together and get this to 1,000x!",
    "curatorNotes": "@SolanaFndn   409 open jobs in the Solana Ecosystem with 99% being from the ecosystem",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1892128306432012445",
    "createdAt": "2025-02-19T07:30:52.000Z",
    "submittedAt": "2025-02-19T08:25:37.933Z",
    "moderationHistory": [
      {
        "tweetId": "1892114612314665415",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@SolanaFndn   409 open jobs in the Solana Ecosystem with 99% being from the ecosystem",
        "timestamp": "2025-02-19T08:25:16.000Z",
        "moderationResponseTweetId": "1892128306432012445"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892128306432012445"
  },
  {
    "tweetId": "1892128214782267794",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨NEW: @SwitchboardFDN launches its Node Partner Program—users can now help decentralize the oracle network while earning rewards. https://t.co/4UWx1WqCGu",
    "curatorNotes": "@SwitchboardFDN   Switchboard Foundation launches its node partner program to incentivize decentralizing its oracle network",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1892131245028516166",
    "createdAt": "2025-02-19T08:24:55.000Z",
    "submittedAt": "2025-02-19T08:37:37.785Z",
    "moderationHistory": [
      {
        "tweetId": "1892128214782267794",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@SwitchboardFDN   Switchboard Foundation launches its node partner program to incentivize decentralizing its oracle network",
        "timestamp": "2025-02-19T08:36:57.000Z",
        "moderationResponseTweetId": "1892131245028516166"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892131245028516166"
  },
  {
    "tweetId": "1891987566217367844",
    "userId": "1499809254227812360",
    "username": "solana_devs",
    "content": "SCALE OR DIE\n\nA Solana event for devs and engineers accelerating the infrastructure layer. Application only access. May 19-20, NYC.\n\n7 Tracks:\n— Research\n— Applications\n— Security &amp; Privacy\n— Core Protocol\n— Developer Experience \n— Infrastructure\n\nIBRL. More info and apply👇 https://t.co/jxPK2yytoA",
    "curatorNotes": "Solana introduces scale or die a two day event (may 19-20) in their new NYC Office tailored to devs to scale Solana infra",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1892131477908824239",
    "createdAt": "2025-02-18T23:06:01.000Z",
    "submittedAt": "2025-02-19T08:38:38.222Z",
    "moderationHistory": [
      {
        "tweetId": "1891987566217367844",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "Solana introduces scale or die a two day event (may 19-20) in their new NYC Office tailored to devs to scale Solana infra",
        "timestamp": "2025-02-19T08:37:53.000Z",
        "moderationResponseTweetId": "1892131477908824239"
      },
      {
        "tweetId": "1891987566217367844",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": "Solana introduces scale or die a two day event (may 19-20) in their new NYC Office tailored to devs to scale Solana infra",
        "timestamp": "2025-02-19T08:37:53.000Z",
        "moderationResponseTweetId": "1892131477908824239"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892131477908824239"
  },
  {
    "tweetId": "1892132878986707361",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨NEW: $DOG, Bitcoin’s #1 dog memecoin, announces its expansion to @Solana. https://t.co/wACCwoA064",
    "curatorNotes": "@solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1892139618528575760",
    "createdAt": "2025-02-19T08:43:27.000Z",
    "submittedAt": "2025-02-19T09:10:38.077Z",
    "moderationHistory": [
      {
        "tweetId": "1892132878986707361",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana",
        "timestamp": "2025-02-19T09:10:13.000Z",
        "moderationResponseTweetId": "1892139618528575760"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892139618528575760"
  },
  {
    "tweetId": "1892133062487450024",
    "userId": "1309886201944473600",
    "username": "0xMert_",
    "content": "I'm hiring for a new role at @heliuslabs \n\nforensic researcher\n\nyour job will be:\n\n- monitor onchain data for sus activity\n- write about it\n- set up systems to prevent fraud proactively\n\nDM proof of work to apply",
    "curatorNotes": "@heliuslabs   Top Solana RPC provider, helius, announces hiring for new \"Forensic Researcher\" role",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1892140405816283581",
    "createdAt": "2025-02-19T08:44:10.000Z",
    "submittedAt": "2025-02-19T09:13:38.336Z",
    "moderationHistory": [
      {
        "tweetId": "1892133062487450024",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@heliuslabs   Top Solana RPC provider, helius, announces hiring for new \"Forensic Researcher\" role",
        "timestamp": "2025-02-19T09:13:21.000Z",
        "moderationResponseTweetId": "1892140405816283581"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892140405816283581"
  },
  {
    "tweetId": "1891973592524492909",
    "userId": "1549038204178911233",
    "username": "KaminoFinance",
    "content": "We've just kicked of a $EURC campaign in collaboration with @gauntlet_xyz\n\nOver the next month, a total of €100,000 $EURC will be distributed across two Kamino liquidity vaults:\n\n👉 EURC-USDC - 50,000 $EURC\n👉 EURC-SOL - 50,000 $EURC https://t.co/trovpbyXMw",
    "curatorNotes": "@gauntlet_xyz   Kaimno launches EURC campaign with Gauntlet with over 100K in Euros in in rewards for users of the EURC-USDC and EURC-SOL vaults",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1892141280341192807",
    "createdAt": "2025-02-18T22:10:30.000Z",
    "submittedAt": "2025-02-19T09:17:37.989Z",
    "moderationHistory": [
      {
        "tweetId": "1891973592524492909",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@gauntlet_xyz   Kaimno launches EURC campaign with Gauntlet with over 100K in Euros in in rewards for users of the EURC-USDC and EURC-SOL vaults",
        "timestamp": "2025-02-19T09:16:50.000Z",
        "moderationResponseTweetId": "1892141280341192807"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892141280341192807"
  },
  {
    "tweetId": "1892174142276808986",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨LATEST: Dave Portnoy (@stoolpresidente) Launches Own Coin, Rugs It Within Hour\n\n✍️ @solace_fm \n\nhttps://t.co/JuuJeXzk2R",
    "curatorNotes": "@stoolpresidente @solace_fm   Barstool President launches coins",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1892176048227307851",
    "createdAt": "2025-02-19T11:27:25.000Z",
    "submittedAt": "2025-02-19T11:35:38.058Z",
    "moderationHistory": [
      {
        "tweetId": "1892174142276808986",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@stoolpresidente @solace_fm   Barstool President launches coins",
        "timestamp": "2025-02-19T11:34:59.000Z",
        "moderationResponseTweetId": "1892176048227307851"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892176048227307851"
  },
  {
    "tweetId": "1892255301669142834",
    "userId": "111653829",
    "username": "knox_trades",
    "content": "🎬HOW TO SET UP A FRANKENDANCER SOLANA NODE FROM 0 TO READY🎬\n\nDashboard: https://t.co/6teQlqxicA\nServer health: https://t.co/2F2mfVUgr2\nSpecs: 3U chassis\nCPU: Epyc 9375F\nRAM: 512GB\nDrives: 3x 2TB Sabrent Rocket 5 https://t.co/MVYj9egZuL",
    "curatorNotes": "Video tutorial on how to setup Frankendancer Solana Node",
    "curatorId": "1688730036474396672",
    "curatorUsername": "potlock_intern",
    "curatorTweetId": "1892275687299465312",
    "createdAt": "2025-02-19T16:49:54.000Z",
    "submittedAt": "2025-02-19T18:11:01.737Z",
    "moderationHistory": [
      {
        "tweetId": "1892255301669142834",
        "feedId": "solana",
        "adminId": "potlock_intern",
        "action": "approve",
        "note": "Video tutorial on how to setup Frankendancer Solana Node",
        "timestamp": "2025-02-19T18:10:55.000Z",
        "moderationResponseTweetId": "1892275687299465312"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892275687299465312"
  },
  {
    "tweetId": "1892227684413104144",
    "userId": "1491783252570357763",
    "username": "BungeeExchange",
    "content": "@Solana is now live on Bungee API!\n\nSwap into Solana from any token, any chain in seconds. https://t.co/N5SITy5gAI",
    "curatorNotes": "@solana Solana is now LIVE on Bungee API",
    "curatorId": "1688730036474396672",
    "curatorUsername": "potlock_intern",
    "curatorTweetId": "1892301860423315926",
    "createdAt": "2025-02-19T15:00:10.000Z",
    "submittedAt": "2025-02-19T20:07:59.198Z",
    "moderationHistory": [
      {
        "tweetId": "1892227684413104144",
        "feedId": "solana",
        "adminId": "potlock_intern",
        "action": "approve",
        "note": "@solana Solana is now LIVE on Bungee API",
        "timestamp": "2025-02-19T19:54:55.000Z",
        "moderationResponseTweetId": "1892301860423315926"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892301860423315926"
  },
  {
    "tweetId": "1892246770186412094",
    "userId": "1250790964161064960",
    "username": "Beamable",
    "content": "Big news for game developers! Beamable Network is launching on @solana  , bringing decentralized infrastructure to gaming at massive scale:\n\n✅ High-performance backend, built for millions\n✅ Fractional cost vs. traditional cloud\n✅ No vendor lock-in, full developer control\n\nThe future of game infrastructure is decentralized.\n\nLearn more: 🔗https://t.co/yIfNGers2e\n\nFollow @jradoff for more details!",
    "curatorNotes": "@solana Beamable Network is launching on the Solana blockchain, introducing a massively decentralized infrastructure for gaming.",
    "curatorId": "1688730036474396672",
    "curatorUsername": "potlock_intern",
    "curatorTweetId": "1892371327912120427",
    "createdAt": "2025-02-19T16:16:00.000Z",
    "submittedAt": "2025-02-20T00:31:22.178Z",
    "moderationHistory": [
      {
        "tweetId": "1892246770186412094",
        "feedId": "solana",
        "adminId": "potlock_intern",
        "action": "approve",
        "note": "@solana Beamable Network is launching on the Solana blockchain, introducing a massively decentralized infrastructure for gaming.",
        "timestamp": "2025-02-20T00:30:57.000Z",
        "moderationResponseTweetId": "1892371327912120427"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892371327912120427"
  },
  {
    "tweetId": "1892535939513131277",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨JUST IN: @phantom's monthly revenue hits a new all-time high of $33M in February with 8 days remaining in the month. https://t.co/booLHk5giA",
    "curatorNotes": "@phantom   leading Solana wallet reaches all time high monthly revenues in February",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1892536420637503555",
    "createdAt": "2025-02-20T11:25:04.000Z",
    "submittedAt": "2025-02-20T12:40:34.963Z",
    "moderationHistory": [
      {
        "tweetId": "1892535939513131277",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@phantom   leading Solana wallet reaches all time high monthly revenues in February",
        "timestamp": "2025-02-20T11:26:58.000Z",
        "moderationResponseTweetId": "1892536420637503555"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892536420637503555"
  },
  {
    "tweetId": "1892310991737598229",
    "userId": "1651199844365766656",
    "username": "sendaifun",
    "content": "Solana Agent Kit is now live with –– the Model Context Protocol (MCP) by @AnthropicAI.\n\nLLM clients like Claude Desktop can access 100+ Solana Actions –– powered by SendAI.\n\nMore on what it unlocks + demo 🧵 https://t.co/ZyZeqROvkp",
    "curatorNotes": "@AnthropicAI @solana @aeyakovenko @solana_devs @SolanaFndn    Solana Agent Kit now supports MCP by Anthropic",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1892536720807149810",
    "createdAt": "2025-02-19T20:31:12.000Z",
    "submittedAt": "2025-02-20T12:40:38.052Z",
    "moderationHistory": [
      {
        "tweetId": "1892310991737598229",
        "feedId": "ai3",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@AnthropicAI @solana @aeyakovenko @solana_devs @SolanaFndn    Solana Agent Kit now supports MCP by Anthropic",
        "timestamp": "2025-02-20T11:28:10.000Z",
        "moderationResponseTweetId": "1892536720807149810"
      },
      {
        "tweetId": "1892310991737598229",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@AnthropicAI @solana @aeyakovenko @solana_devs @SolanaFndn    Solana Agent Kit now supports MCP by Anthropic",
        "timestamp": "2025-02-20T11:28:10.000Z",
        "moderationResponseTweetId": "1892536720807149810"
      },
      {
        "tweetId": "1892310991737598229",
        "feedId": "ai",
        "adminId": "potlock_intern",
        "action": "approve",
        "note": "@AnthropicAI @solana @aeyakovenko @solana_devs @SolanaFndn Solana Agent Kit is LIVE with Model Context Prootocol by @anthopicAI",
        "timestamp": "2025-02-20T13:55:46.000Z",
        "moderationResponseTweetId": "1892536720807149810"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892536720807149810"
  },
  {
    "tweetId": "1891952193965527226",
    "userId": "1436703851931967488",
    "username": "Syndica_io",
    "content": "1/ @Solana's application revenues ratcheted up in January as it continues to dominate, no matter the news cycle.\n\nWith explosive growth in trading platforms, memecoins, and DeFi — revenues are flowing into the Solana ecosystem like never before.\n\nDive into our report below 👇 https://t.co/xAolsl5qpR",
    "curatorNotes": "@solana   Syndica releases report on rising Solana dApp Revenue",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1892537558757740866",
    "createdAt": "2025-02-18T20:45:28.000Z",
    "submittedAt": "2025-02-20T12:40:40.345Z",
    "moderationHistory": [
      {
        "tweetId": "1891952193965527226",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solana   Syndica releases report on rising Solana dApp Revenue",
        "timestamp": "2025-02-20T11:31:30.000Z",
        "moderationResponseTweetId": "1892537558757740866"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892537558757740866"
  },
  {
    "tweetId": "1892543461028434282",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨News: @TomTom, a leader in real-time traffic and navigation, is leveraging Solana-based @Hivemapper's data to enhance its mapping solutions. With 600M connected devices across 84 countries, TomTom turns to Hivemapper for fresher, more dynamic map data. https://t.co/VkL5jtMbNf",
    "curatorNotes": "@TomTom @Hivemapper   OG GPS device company TOM TOM leveraging Solana Depin Project, Hivemapper for accurate map data",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1892547364952424692",
    "createdAt": "2025-02-20T11:54:57.000Z",
    "submittedAt": "2025-02-20T12:40:41.361Z",
    "moderationHistory": [
      {
        "tweetId": "1892543461028434282",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@TomTom @Hivemapper   OG GPS device company TOM TOM leveraging Solana Depin Project, Hivemapper for accurate map data",
        "timestamp": "2025-02-20T12:10:28.000Z",
        "moderationResponseTweetId": "1892547364952424692"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892547364952424692"
  },
  {
    "tweetId": "1892573716711612443",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "BREAKING: @solstrategies_ partners with @TetraTrust, Canada’s first licensed digital asset trust company, to enhance institutional access to secure, regulated @Solana staking—driving further adoption. https://t.co/jITLivX0sN",
    "curatorNotes": "@solstrategies_ @TetraTrust @solana",
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1892703063221178376",
    "createdAt": "2025-02-20T13:55:11.000Z",
    "submittedAt": "2025-02-20T22:29:51.413Z",
    "moderationHistory": [
      {
        "tweetId": "1892573716711612443",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": "@solstrategies_ @TetraTrust @solana",
        "timestamp": "2025-02-20T22:29:09.000Z",
        "moderationResponseTweetId": "1892703063221178376"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892703063221178376"
  },
  {
    "tweetId": "1891631571901276422",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "Exclusive: @DeFiTuna Blows Whistle on M3M3's $200M Market Manipulation Scheme\n\n✍️ @0xSheldon \nhttps://t.co/YDJZfY2soY",
    "curatorNotes": "@DeFiTuna @0xSheldon",
    "curatorId": "1688730036474396672",
    "curatorUsername": "potlock_intern",
    "curatorTweetId": "1892734836034441652",
    "createdAt": "2025-02-17T23:31:26.000Z",
    "submittedAt": "2025-02-21T01:02:01.774Z",
    "moderationHistory": [
      {
        "tweetId": "1891631571901276422",
        "feedId": "solana",
        "adminId": "potlock_intern",
        "action": "approve",
        "note": "@DeFiTuna @0xSheldon",
        "timestamp": "2025-02-21T00:35:24.000Z",
        "moderationResponseTweetId": "1892734836034441652"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892734836034441652"
  },
  {
    "tweetId": "1891826151988851070",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨New: @JupiterExchange To Bring in External Investigator Following Chow’s Resignation\n✍️ @solace_fm \nhttps://t.co/hPMrEvrsIi",
    "curatorNotes": "@JupiterExchange @solace_fm",
    "curatorId": "1688730036474396672",
    "curatorUsername": "potlock_intern",
    "curatorTweetId": "1892735060320629152",
    "createdAt": "2025-02-18T12:24:37.000Z",
    "submittedAt": "2025-02-21T01:02:04.046Z",
    "moderationHistory": [
      {
        "tweetId": "1891826151988851070",
        "feedId": "solana",
        "adminId": "potlock_intern",
        "action": "approve",
        "note": "@JupiterExchange @solace_fm",
        "timestamp": "2025-02-21T00:36:18.000Z",
        "moderationResponseTweetId": "1892735060320629152"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892735060320629152"
  },
  {
    "tweetId": "1891803113071190528",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨New: @MeteoraAG’s Ben Chow: “I Just Enabled the Biggest Criminal in the World”\n\n✍️ @solace_fm \nhttps://t.co/0akXGWKqef",
    "curatorNotes": "@MeteoraAG @solace_fm",
    "curatorId": "1688730036474396672",
    "curatorUsername": "potlock_intern",
    "curatorTweetId": "1892735233364996392",
    "createdAt": "2025-02-18T10:53:04.000Z",
    "submittedAt": "2025-02-21T01:02:05.419Z",
    "moderationHistory": [
      {
        "tweetId": "1891803113071190528",
        "feedId": "solana",
        "adminId": "potlock_intern",
        "action": "approve",
        "note": "@MeteoraAG @solace_fm",
        "timestamp": "2025-02-21T00:36:59.000Z",
        "moderationResponseTweetId": "1892735233364996392"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892735233364996392"
  },
  {
    "tweetId": "1892574456394219902",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨NEWS: @MagicBlock integrates with @jito_sol (Re)staking to boost decentralization &amp; security for real-time dApps on @solana. https://t.co/ipDEfXg00v",
    "curatorNotes": "@magicblock @jito_sol @solana",
    "curatorId": "1688730036474396672",
    "curatorUsername": "potlock_intern",
    "curatorTweetId": "1892736320818045312",
    "createdAt": "2025-02-20T13:58:07.000Z",
    "submittedAt": "2025-02-21T01:02:06.703Z",
    "moderationHistory": [
      {
        "tweetId": "1892574456394219902",
        "feedId": "solana",
        "adminId": "potlock_intern",
        "action": "approve",
        "note": "@magicblock @jito_sol @solana",
        "timestamp": "2025-02-21T00:41:18.000Z",
        "moderationResponseTweetId": "1892736320818045312"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892736320818045312"
  },
  {
    "tweetId": "1892589090555806205",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "NEW: A whale has withdrawn another 47,154 $SOL ($7.98M) from #Binance and staked it.\n\nOver the past 3 days, this whale has staked a total of 134,482 $SOL ($23.58M). https://t.co/fn9TzTHuO8",
    "curatorNotes": "Whale Activities",
    "curatorId": "1688730036474396672",
    "curatorUsername": "potlock_intern",
    "curatorTweetId": "1892736522270507288",
    "createdAt": "2025-02-20T14:56:16.000Z",
    "submittedAt": "2025-02-21T01:02:08.059Z",
    "moderationHistory": [
      {
        "tweetId": "1892589090555806205",
        "feedId": "solana",
        "adminId": "potlock_intern",
        "action": "approve",
        "note": "Whale Activities",
        "timestamp": "2025-02-21T00:42:06.000Z",
        "moderationResponseTweetId": "1892736522270507288"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892736522270507288"
  },
  {
    "tweetId": "1892637795056820442",
    "userId": "1462268178017443842",
    "username": "crossmint",
    "content": "Solana Smart Wallets are here.\n\nThe next-generation of programmable, gasless wallets, built for mass adoption.\n\nDeploy in 10 lines of code and scale to millions of users.\n\nWhy they change everything 👇 https://t.co/BFTUWbfwnU",
    "curatorNotes": "@solana @SquadsProtocol @heliuslabs @solana_devs @crossmint launches Solana Smart Wallets, which are fully programmable, gasless, and seedless and built for mass adoption.",
    "curatorId": "1688730036474396672",
    "curatorUsername": "potlock_intern",
    "curatorTweetId": "1892737226485739708",
    "createdAt": "2025-02-20T18:09:48.000Z",
    "submittedAt": "2025-02-21T01:02:09.282Z",
    "moderationHistory": [
      {
        "tweetId": "1892637795056820442",
        "feedId": "solana",
        "adminId": "potlock_intern",
        "action": "approve",
        "note": "@solana @SquadsProtocol @heliuslabs @solana_devs @crossmint launches Solana Smart Wallets, which are fully programmable, gasless, and seedless and built for mass adoption.",
        "timestamp": "2025-02-21T00:44:54.000Z",
        "moderationResponseTweetId": "1892737226485739708"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1892737226485739708"
  },
  {
    "tweetId": "1892941173582659615",
    "userId": "1783117865928826880",
    "username": "dAGIhouse",
    "content": "The dAGI Accelerator is proud to announce support from the Solana Foundation 🎉\n\nSolana + AI = lightspeed intelligence. If you’re a founder building at the intersection of crypto and AI, this is your chance to pour rocket fuel on your growth. Here’s how 🧵👇 https://t.co/AcPkWNJKun",
    "curatorNotes": "dAGI Accelerator Boosts AI-Crypto Innovation on Solana!",
    "curatorId": "1688730036474396672",
    "curatorUsername": "potlock_intern",
    "curatorTweetId": "1893083868476882946",
    "createdAt": "2025-02-21T14:15:19.000Z",
    "submittedAt": "2025-02-22T02:28:08.715Z",
    "moderationHistory": [
      {
        "tweetId": "1892941173582659615",
        "feedId": "solana",
        "adminId": "potlock_intern",
        "action": "approve",
        "note": "dAGI Accelerator Boosts AI-Crypto Innovation on Solana!",
        "timestamp": "2025-02-21T23:42:20.000Z",
        "moderationResponseTweetId": "1893083868476882946"
      },
      {
        "tweetId": "1892941173582659615",
        "feedId": "ai",
        "adminId": "potlock_intern",
        "action": "approve",
        "note": "dAGI Accelerator Boosts AI-Crypto Innovation on Solana!",
        "timestamp": "2025-02-21T23:42:20.000Z",
        "moderationResponseTweetId": "1893083868476882946"
      },
      {
        "tweetId": "1892941173582659615",
        "feedId": "ai3",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-02-22T13:45:59.000Z",
        "moderationResponseTweetId": "1893083868476882946"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1893083868476882946"
  },
  {
    "tweetId": "1893020667051942193",
    "userId": "158758371",
    "username": "metaplex",
    "content": "1/ Core just got a major upgrade!\n\nThe new Execute feature introduces Asset Signers, allowing NFTs to sign transactions, transfer assets, and act autonomously.\n\nThis changes how NFTs work on Solana 🦾 https://t.co/AWbFW10oMn",
    "curatorNotes": "@solana",
    "curatorId": "1688730036474396672",
    "curatorUsername": "potlock_intern",
    "curatorTweetId": "1893285777947205676",
    "createdAt": "2025-02-21T19:31:12.000Z",
    "submittedAt": "2025-02-22T13:05:19.421Z",
    "moderationHistory": [
      {
        "tweetId": "1893020667051942193",
        "feedId": "solana",
        "adminId": "potlock_intern",
        "action": "approve",
        "note": "@solana",
        "timestamp": "2025-02-22T13:04:39.000Z",
        "moderationResponseTweetId": "1893285777947205676"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1893285777947205676"
  },
  {
    "tweetId": "1892215000758128963",
    "userId": "1531639904567971840",
    "username": "bioprotocol",
    "content": "🚨 The Curetopia Auction is LIVE!\n\n10,000 rare diseases ignored by Big Pharma\nIt's time to leave the system behind\n\nThe first BioDAO on @solana 🧬\n\nUniting patients and patient families to accelerate $CURES and @endrarediseases 🔬\n\nDetails below 🧵👇 https://t.co/yRqWVI4wHh",
    "curatorNotes": "@solana @endrarediseases",
    "curatorId": "1688730036474396672",
    "curatorUsername": "potlock_intern",
    "curatorTweetId": "1893291947026010324",
    "createdAt": "2025-02-19T14:09:46.000Z",
    "submittedAt": "2025-02-22T13:29:19.600Z",
    "moderationHistory": [
      {
        "tweetId": "1892215000758128963",
        "feedId": "DeSci",
        "adminId": "potlock_intern",
        "action": "approve",
        "note": "@solana @endrarediseases",
        "timestamp": "2025-02-22T13:29:10.000Z",
        "moderationResponseTweetId": "1893291947026010324"
      },
      {
        "tweetId": "1892215000758128963",
        "feedId": "solana",
        "adminId": "potlock_intern",
        "action": "approve",
        "note": "@solana @endrarediseases",
        "timestamp": "2025-02-22T13:29:10.000Z",
        "moderationResponseTweetId": "1893291947026010324"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1893291947026010324"
  },
  {
    "tweetId": "1893034284081955025",
    "userId": "1435897632581357572",
    "username": "SolanaFloor",
    "content": "🚨BREAKING: Franklin Templeton, a $1.46T asset manager, has officially filed an S-1 with the SEC for a spot Solana $SOL ETF. https://t.co/qTY8YC6DuA",
    "curatorNotes": null,
    "curatorId": "1654266255711301632",
    "curatorUsername": "plugrel",
    "curatorTweetId": "1893292749262037067",
    "createdAt": "2025-02-21T20:25:18.000Z",
    "submittedAt": "2025-02-22T13:33:19.539Z",
    "moderationHistory": [
      {
        "tweetId": "1893034284081955025",
        "feedId": "usa",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-02-22T13:32:21.000Z",
        "moderationResponseTweetId": "1893292749262037067"
      },
      {
        "tweetId": "1893034284081955025",
        "feedId": "solana",
        "adminId": "plugrel",
        "action": "approve",
        "note": null,
        "timestamp": "2025-02-22T13:32:21.000Z",
        "moderationResponseTweetId": "1893292749262037067"
      }
    ],
    "status": "approved",
    "moderationResponseTweetId": "1893292749262037067"
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date-desc");

  const filteredAndSortedTweets = useMemo(() => {
    const filtered = tweets.filter(
      (tweet) =>
        tweet.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tweet.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "date-asc":
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case "date-desc":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case "username":
          return a.username.localeCompare(b.username);
        default:
          return 0;
      }
    });
  }, [searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#1C1C1C] to-[#000000] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#14F195] to-[#9945FF] text-transparent bg-clip-text">
            SOL Digest
          </h1>
          <p className="mt-2 text-gray-400">
            Track the latest in Solana
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <SortSelect value={sortBy} onChange={setSortBy} />
        </div>

        <div className="space-y-6">
          {filteredAndSortedTweets.map((tweet) => (
            <TweetCard key={tweet.tweetId} tweet={tweet} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
