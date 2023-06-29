import CollectionForm from '../../components/CollectionForm/CollectionForm';

async function page() {
  return (
    <div>
      <CollectionForm method={'POST'} />
    </div>
  );
}

export default page;
