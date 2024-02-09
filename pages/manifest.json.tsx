import { GetServerSideProps } from 'next'
import manifest from '../services/manifest'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify(manifest))
  
  res.end()

  return {
    props: {}
  }
}

function Manifest() {

}

export default Manifest