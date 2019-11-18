// libs
import React from 'react'

const AMAZON_USA = 'https://www.amazon.com/'
const AMAZON_UK = 'https://www.amazon.co.uk/'
const AMAZON_CANADA = 'https://www.amazon.ca/'
const AMAZON_AUSTRALIA = 'https://www.amazon.com.au/'
const AMAZON_GERMANY = 'https://www.amazon.de/'
const TWEET_IT = 'Eliment-Tweet-It/dp/B079BSJSH8/'
// const ONEPAD = 'Eliment-OnePad-Unofficial-OneNote-Client/dp/B079G5TGNH/'
// const EVERPAD = 'Eliment-EverPad-Unofficial-EverNote-Client/dp/B079KKD6Q1'

export const PROJECTS = [
  {
    title: 'Circular Carousel',
    category: 'React Native',
    thumbnail: './images/thumbs/react-native-01.gif',
    urls: [
      {
        type: 'Github',
        href:
          'https://www.github.com/mrmuhammadali/react-native-circular-carousel',
      },
      {
        type: 'Npm',
        href: 'https://www.npmjs.com/package/react-native-circular-carousel',
      },
    ],
    description:
      'An open-source library to create a Circular Carousel in iOS and Android.',
  },

  {
    title: 'React Invoicer',
    category: 'React / FusionJS',
    thumbnail: './images/thumbs/invoicer.png',
    urls: [
      {
        type: 'Github',
        href: 'https://www.github.com/mrmuhammadali/invoicer',
      },
      {
        type: 'Visit App',
        href: 'https://react-invoicer.herokuapp.com/',
      },
    ],
    description:
      'An open-source app to generate invoice and download them as PDF.',
  },

  {
    title: 'HTTP Router',
    category: 'FusionJS Plugin - NodeJS',
    thumbnail: '.',
    urls: [
      {
        type: 'Github',
        href: 'https://www.github.com/mrmuhammadali/fusion-plugin-http-router',
      },
      {
        type: 'Npm',
        href: 'https://www.npmjs.com/package/fusion-plugin-http-router',
      },
    ],
    description:
      'An open-source plugin for Fusion apps to register the http routes / endpoints.',
  },

  {
    title: 'Assembla / Gitlab',
    category: 'Bot - NodeJS',
    thumbnail: './images/thumbs/bot-01.jpg',
    image: './images/full/bot-01.jpg',
    urls: [
      {
        type: 'Skype',
        href: 'https://join.skype.com/bot/8864cf5d-3c38-457f-976f-cfb07dd93c7f',
      },
      {
        type: 'Telegram',
        href: 'https://t.me/MrGitLabBot',
      },
    ],
    description:
      'Skype/Telegram bot which notifies right in your chat upon any git operation.',
    more: (
      <div>
        Problem: People in a workplace often have to tell each other whether
        they commit a chunk of code, open an issue/ticket or create a merge
        request.
        <br />
        We had this problem in our team which was literally painful. We were
        using
        <a href="https://www.assembla.com/home" target="__blank">
          {' Assembla '}
        </a>
        for Version Control at first but switched to
        <a href="https://www.gitlab.com/" target="__blank">
          {' Gitlab '}
        </a>
        after sometime.
        <br />
        <br />
        Solution: What I did was, created a bot for Skype and Telegram which
        notifies everyone when anyone do any git operation.
        <br />
        PS: Why Telegram? Because I prefer it on any other platform 😛
        <br />
        <br />
        Assembla:
        <a href="https://join.skype.com/bot/5452dd9e-b3f2-440f-ad4c-3352296a254f">
          {' Skype '}
        </a>
        <a href="https://t.me/AssemblaBot">{' Telegram '}</a>
        <br />
        Gitlab:
        <a href="https://join.skype.com/bot/8864cf5d-3c38-457f-976f-cfb07dd93c7f">
          {' Skype '}
        </a>
        <a href="https://t.me/MrGitLabBot">{' Telegram '}</a>
      </div>
    ),
  },

  {
    title: 'Tweet It',
    category: 'Bot - NodeJS',
    thumbnail: './images/thumbs/bot-02.png',
    image: './images/full/bot-02.png',
    urls: [
      {
        type: 'Amazon US',
        href: `${AMAZON_USA}${TWEET_IT}`,
      },
      {
        type: 'Amazon UK',
        href: `${AMAZON_UK}${TWEET_IT}`,
      },
    ],
    description:
      "Amazon's Alexa Skill which lets you tweet on your Twitter timeline.",
    more: (
      <div>
        Amazon's Alexa Skill built to tweet on your Twitter timeline handsfree.
        <br />
        <br />
        {'Skill URLs: '}
        <a href={`${AMAZON_AUSTRALIA}${TWEET_IT}`} target="__blank">
          Australia
        </a>
        {', '}
        <a href={`${AMAZON_CANADA}${TWEET_IT}`} target="__blank">
          Canada
        </a>
        {', '}
        <a href={`${AMAZON_GERMANY}${TWEET_IT}`} target="__blank">
          Germany
        </a>
        {', '}
        <a href={`${AMAZON_UK}${TWEET_IT}`} target="__blank">
          UK
        </a>
        {', '}
        <a href={`${AMAZON_USA}${TWEET_IT}`} target="__blank">
          US
        </a>
      </div>
    ),
  },
]

export const REST_PROJECTS = [
  {
    category: 'Android',
    title: 'I Need a Partner',
    thumbnail: './images/thumbs/android-01.jpg',
    image: './images/full/android-01.jpg',
    url: '',
    description:
      'Android application which helps its users find nearby people sharing similar interests.',
    more: (
      <div>
        <ul>
          <li>
            This Application proposes to help its users find nearby people
            sharing similar interests.
          </li>
          <li>
            Features: Chat(Text, Voice and File sharing), Post(File Sharing),
            Groups, Friends, People Nearby, Partnerships based on Interests,
            Reviews, Interests Endorsement, Meeting Scheduler and Reminders.
          </li>
        </ul>
        I developed Android Application using Java:
        <br />
        <ol type="a">
          <li>Twitter Digits is used for Phone no. verification.</li>
          <li>Firebase is used for messaging and notifications.</li>
          <li>Retrofit2 is used for HTTP requests and responses.</li>
          <li>
            GSON Converter Factory is used to parse HTTP Response Body directly
            onto Models.
          </li>
        </ol>
      </div>
    ),
  },

  {
    category: 'Web',
    title: 'Magic Circle',
    thumbnail: './images/thumbs/image-01.jpg',
    image: './images/full/image-01.jpg',
    url: '',
    description:
      'Online presence for a business in event planning industry called Magic Circle.',
    more: (
      <div>
        Created business website for online presence. Users can contact through
        Contact Form. <br />
        Libraries Used: EasingJS, Flex Slider, jCarousel, jQuery, Supersized
      </div>
    ),
  },

  {
    category: 'Web',
    title: 'Silver Consultancy',
    thumbnail: './images/thumbs/image-05.jpg',
    image: './images/full/image-05.jpg',
    url: '',
    description:
      'A consultancy website for Singapore based insurance consultancy company.',
    more: (
      <div>
        Created a consultancy website for Singapore based insurance consultancy
        company. Users can fill up their forms for any insurance policies and
        their data will be sent through email to the company. Contact form is
        provided for any further queries.
      </div>
    ),
  },

  {
    category: 'Web',
    title: 'Amazon Product Research',
    thumbnail: './images/thumbs/image-06.jpg',
    image: './images/full/image-06.jpg',
    url: '',
    description:
      'Product research tool which can be used to analyze products based on some metrics.',
    more: (
      <div>
        Consumed Amazon Web Service to fetch products and their related data.
        This website can be used by Sellers to calculate the average sale rank
        and average retail price to further calculate the profit when buying
        that product form whole sale dealer. <br />
        Languages and Libraries: HTML, PHP, Bootstrap, Font Awesome, jQuery
      </div>
    ),
  },
]
