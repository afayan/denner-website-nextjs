import React from 'react';
import '../styles/AvatarStack.css';

const avatars = [
  { url: 'https://avatars.githubusercontent.com/u/16860528', alt: 'User 1' },
  { url: 'https://avatars.githubusercontent.com/u/20110627', alt: 'User 2' },
  { url: 'https://avatars.githubusercontent.com/u/106103625', alt: 'User 3' },
];

const AvatarStack = () => {
  return (
    <div className="avatar-stack">
      {avatars.map((avatar, index) => (
        <div
          className="avatar-wrapper"
          key={index}
          style={{ zIndex: avatars.length}}
        >
          {avatar.url.startsWith('http') ? (
            <img src={avatar.url} alt={avatar.alt} className="avatar" />
          ) : (
            <div className="avatar placeholder">{avatar.url}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AvatarStack;
