import { getMenu } from "@/services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((item) => {
        return <MenuItem key={item.id} pizza={item} />;
      })}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
