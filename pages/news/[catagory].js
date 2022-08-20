const NewsByCatagory = ({ sportsNews, catagory }) => {
  return (
    <>
      <div>
        {sportsNews.map((news) => {
          return <div key={news.id}>{news.title}</div>;
        })}
      </div>
    </>
  );
};
export default NewsByCatagory;
export const getServerSideProps = async (context) => {
  const { params ,query} = context;
  const { catagory } = params;
  console.log(query)
  const response = await fetch(`http://localhost:4000/news?catagory=${catagory}`);
  const data = await response.json();
  if (data.length==0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      sportsNews: data,
      catagory,
    },
  };
};
