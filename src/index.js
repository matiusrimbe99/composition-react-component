import React from 'react';
import { createRoot } from 'react-dom/client';

function Button({ link }) {
  return (
    <div className="btn-component">
      <a href={link}>Find out more</a>
    </div>
  );
}

function CardBody({ date, title, content, link }) {
  return (
    <div className="card-body-comp">
      <p>{date}</p>
      <h3>{title}</h3>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
}

function CardHeader({ image, category }) {
  return (
    <div className="card-header-com">
      <h4>{category}</h4>
      <img src={image} alt="Gambar Berita" />
    </div>
  );
}

function Card({ image, category, date, title, content, link }) {
  return (
    <div className="card-comp">
      <CardHeader image={image} category={category} />
      <CardBody date={date} title={title} content={content} link={link} />
    </div>
  );
}

function Header({ title, subtitle }) {
  return (
    <div className="header-comp">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

function News() {
  const title = 'Latest News';
  const subtitle = 'Covering March & April 2022';
  const someNews = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'Travel',
      link: '#'
    }
  ];

  return (
    <div className="container-news">
      <Header title={title} subtitle={subtitle} />
      <Card
        image={someNews[0].image}
        title={someNews[0].title}
        category={someNews[0].category}
        content={someNews[0].content}
        link={someNews[0].link}
        date={someNews[0].date}
      />
      <Card
        image={someNews[1].image}
        title={someNews[1].title}
        category={someNews[1].category}
        content={someNews[1].content}
        link={someNews[1].link}
        date={someNews[1].date}
      />
      <Card
        image={someNews[2].image}
        title={someNews[2].title}
        category={someNews[2].category}
        content={someNews[2].content}
        link={someNews[2].link}
        date={someNews[2].date}
      />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<News />);
