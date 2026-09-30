import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description,keywords }) => {
  return (
    <Helmet>
        <title> {title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: "Coffee House — Premium Coffee",
    description: "Premium coffee beans & blends. Fresh roasted, delivered to your door.",
    keywords: "coffee, coffee beans, coffee bags, specialty coffee, fresh roasted",
}

export default Meta