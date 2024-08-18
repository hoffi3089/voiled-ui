import { NotificationManager } from 'react-notifications';

const Now = () => {
  return Math.round(new Date().getTime() / 1000);
}

const tips = (type: string, html: string) => {
  switch (type) {
    case 'info': {
      NotificationManager.info(html, "Info");
      break;
    }
    case 'success': {
      NotificationManager.success(html, "Success");
      break;
    }
    case 'warning': {
      NotificationManager.warning(html, "Warning", 3000);
      break;
    }
    case 'error': {
      NotificationManager.error(html, "Error", 5000, () => { });
      break;
    }
  }
}

const textCopy = (text: string) => {
  let textField = document.createElement('textarea')
  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()

  let tempText = text;
  if (text.length > 10) {
    tempText = `${text.substring(0, 5)} ... `;
    tempText += text.substring(text.length, text.length - 5);
  }

  tips("success", "Copied: " + tempText);
}

const delay = (ms: number) => {
  return new Promise(res => setTimeout(res, ms));
}


export { Now, tips, textCopy, delay };