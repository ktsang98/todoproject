import Link from 'next/link'
import styled from 'styled-components';

const LinksContainer = styled.div`
width: 50%;
margin: 2rem auto;
display: flex;
justify-content: center;

a {
  color: crimson;
  padding: 2rem;
}


`;

function index(props) {



return (
  <>
    <header>
      <h1>To Do List App</h1>
      <LinksContainer>
        <Link href="/login">
          <a>login</a>
        </Link>
        <Link href="/login">
          <a>sign up</a>
        </Link>
      </LinksContainer>
    </header>
  </>
  );
}

export default index;
