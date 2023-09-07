import styles from "./CategoryList.module.scss";
/* import * as catsAPI from '../../utilities/catDep-api'; */
import CatListItem from '../CatListItem/CatListItem';

export default function CategoryList({ handleClick, setCategories, categories }) {
  const cats = categories.map(cat =>
    <CatListItem
      key={cat._id}
      onClick={handleClick}
      category={cat}
      setCategories={setCategories}
      categories={categories}
    />
  );
  return (
    <main className={styles.categories}>
      {cats}
    </main>
  );
  
  /* const cats = categories.map((cat) => <li key={cat}>{cat}</li>);*/

  /* const [categories, setCategories] = useState([]);
  const [activeDep, setActiveDep] = useState('');
  const departmentsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function () {
    async function getCats() {
      const cats = await catsAPI.getCategories(departmentId);
      departmentsRef.current = cats.reduce((deps, cat) => {
        const dep = cat.department.name;
        return deps.includes(dep) ? deps : [...deps, dep];
      }, []);
      setCategories(cats);
      setActiveDep(departmentsRef.current[0]);
    }
    getCats();
  }, []); */

  /* return ( */
    {/* <div className={styles.App}> */}
      {/* <ul>{cats}</ul> */}

      {/* <main 
        className={styles.CatList} 
        categories={categories.filter(cat => cat.department.name === activeDep)} 
        setCategories={setCategories}
      >
        {categories}
      </main> */}

      {/* <div className={styles.categories}>
        <div>
          <img
            src="https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
            alt="bucket"
            height="100vmin"
          />
          <p>CATEGORY</p>
        </div>
        <div>
          <img
            src="https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
            alt="bucket"
            height="100vmin"
          />
          <p>CATEGORY</p>
        </div>
        <div>
          <img
            src="https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
            alt="bucket"
            height="100vmin"
          />
          <p>CATEGORY</p>
        </div>
        <div>
          <img
            src="https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
            alt="bucket"
            height="100vmin"
          />
          <p>CATEGORY</p>
        </div>
        <div>
          <img
            src="https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
            alt="bucket"
            height="100vmin"
          />
          <p>CATEGORY</p>
        </div>
        <div>
          <img
            src="https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
            alt="bucket"
            height="100vmin"
          />
          <p>CATEGORY</p>
        </div>
        <div>
          <img
            src="https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
            alt="bucket"
            height="100vmin"
          />
          <p>CATEGORY</p>
        </div>
        <div>
          <img
            src="https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
            alt="bucket"
            height="100vmin"
          />
          <p>CATEGORY</p>
        </div>
        <div>
          <img
            src="https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
            alt="bucket"
            height="100vmin"
          />
          <p>CATEGORY</p>
        </div>
        <div>
          <img
            src="https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
            alt="bucket"
            height="100vmin"
          />
          <p>CATEGORY</p>
        </div>
        <div>
          <img
            src="https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
            alt="bucket"
            height="100vmin"
          />
          <p>CATEGORY</p>
        </div>
        <div>
          <img
            src="https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
            alt="bucket"
            height="100vmin"
          />
          <p>CATEGORY</p>
        </div>
      </div> */}
    /* </div>
  ); */
}