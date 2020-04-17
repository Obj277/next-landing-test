export default () => {
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.match(/iphone/i)) {
    return 'iphone';
  } else if (userAgent.match(/ipod/i)) {
    return 'ipod';
  } else if (userAgent.match(/ipad/i)) {
    return 'ipad';
  } else if (userAgent.match(/Windows Phone|IEMobile|WPDesktop/i)) {
    return 'windows';
  } else if (userAgent.match(/BlackBerry|BB10|PlayBook/i)) {
    return 'blackberry';
  } else if (userAgent.match(/android/i)) {
    return 'android';
  } else {
    return 'unknown';
  }
};

