export default function Commands(message, chat) {
  const commands = '!commands, !clear';

  if (message === '!clear') {
    chat.splice(0, chat.length);
  } else if (message === '!commands') {
    chat.push({ name: 'Bot', message: commands });
  } else if (message[0] === '!') {
    chat.push({ name: 'Bot', message: 'Command not found' });
  }
}
