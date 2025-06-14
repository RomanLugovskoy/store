const NotFound = () => {
  return (
    <div className="p-5 flex flex-col items-center gap-5">
      <img
        src="https://www.meme-arsenal.com/memes/04c3324439d629b4be898ef9c1d3ec8d.jpg"
        alt="Вы ошиблись с адресом страницы"
        className="w-1/3 rounded-4xl"
      />
      <p>Такой страницы пока нет :{"\u0028"}</p>
    </div>
  );
};

export default NotFound;
