# React Fb Customer Chat

> React component for [Messenger customer chat plugin](https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation

```sh
npm install react-messenger-customer-chat
```

## Usage

```js
import React from "react";
import ReactDOM from "react-dom";
import FbCustomerChat from "react-fb-customer-chat";

<FbCustomerChat
  pageId="<PAGE_ID>"
  appId="<APP_ID>"
  themeColor="<REF_STRING>"
/>;
```

> Note: It will handle sdk initialize automatically for you. See more details in
> [Customer Chat Plugin official docs](https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin) and [Customer Chat SDK official docs](https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin/sdk).

## Props

```js
static propTypes = {
  pageId: PropTypes.string.isRequired,
  appId: PropTypes.string.isRequired,
  themeColor: PropTypes.string,
  debug: PropTypes.bool,
};

```

## License

MIT ©
