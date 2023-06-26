import CollectionForm from '../../components/CollectionForm/CollectionForm';
import styles from './add-car.module.scss';

function page() {
  return (
    <div>
      <CollectionForm method={'POST'} />
    </div>
  );
}

export default page;
