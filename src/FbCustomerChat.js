import React from 'react';
import { useFacebook } from './useFacebook';

const useStyles = makeStyles(theme => ({
  '@global': {
    '.fb_dialog,.fb_reset iframe': {
      zIndex: `${theme.zIndex.modal - 10} !important`,
    },
  },
}));

// https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin
const FbCustomerChat = React.memo(function CustomerChat(props) {
  const timeoutRef = React.useRef();
  console.log('props', props);
  const appId = props.appId || '';
  const pageId = props.pageId || '';
  const themeColor = props.themeColor || '#28282a';
  // Initialize Facebook widget(s) in 2 seconds after
  // the component is mounted.
  useFacebook({ xfbml: false }, FB => {
    if (timeoutRef.current !== null) {
      timeoutRef.current = setTimeout(() => {
        const el = document.createElement('div');
        el.className = 'fb-customerchat';
        el.setAttribute('attribution', 'setup_tool');
        el.setAttribute('appId', appId);
        el.setAttribute('page_id', pageId);
        el.setAttribute('ptheme_color', themeColor);
        // el.setAttribute('plogged_in_greeting', '...');
        // el.setAttribute('plogged_out_greeting', '...');
        // el.setAttribute('pgreeting_dialog_display', '...');
        // el.setAttribute('pgreeting_dialog_delay', '...');
        // el.setAttribute('pminimized', 'false');
        document.body.appendChild(el);
        FB.XFBML.parse();
      }, 2000);
    }
  });

  return null;
});

export default FbCustomerChat;
