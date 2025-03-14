export default async function Page({ params }) {
    const { slug } = await params
    let languages = ["python","javascript","java","cpp","cs","c","css"]

    if(languages.includes(params.slug)){
        return <div>My Post: {slug}</div>
    }
    else
    {
        return <div> unable to find "{slug}" page bro ..... sorry about that please try with another one .... bura matt mann mey kuch nahi karr sakta</div>
    }
    return <div>My Post: {slug}</div>
  }