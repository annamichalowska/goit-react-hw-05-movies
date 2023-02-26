import { Form, Input } from './SearchBox.styled';

function SearchBox({ query, setQuery }) {
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
        placeholder="Search movie"
      />
    </Form>
  );
}

export default SearchBox;
