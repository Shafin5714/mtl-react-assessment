import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Actions
import { getProductList } from "../Redux/Product/productActions";
import { addToCart } from "../Redux/Cart/cartActions";
// Component
import ProductCard from "../components/ProductCard";

export default function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [anchorEl, setAnchorEl] = useState(null);

  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [categoryList, setCategoryList] = useState("");
  const [search, setSearch] = useState("");

  
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const getProducts = async () => {
      dispatch(getProductList(sort,category));
    };
    getProducts();
  }, [category,sort]);

  // Get All Category

  useEffect(() => {
    const categories = products.map((p) => p.category);
    let uniqueCat = [...new Set(categories)];
    setCategoryList(uniqueCat);

   
  }, [products]);

  
  const handleSort = (sortData) => {
    // dispatch(getProductList(sortData,category,search));
    setSort(sortData)
    setAnchorEl(null);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
    // dispatch(getProductList(sort,event.target.value,search))
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }} my={2}>
        <Box display="flex" justifyContent="end">
          <Box display="flex" alignItems="center">
            {/* Sort */}
            <Box>
              <Box my={2}>
                <Button variant="contained" onClick={handleClick}>
                  Sort
                </Button>
              </Box>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={() => handleSort("name")}>Name</MenuItem>
                <MenuItem onClick={() => handleSort("price")}>Price</MenuItem>
              </Menu>
            </Box>
            {/* filter */}
            <Box sx={{ minWidth: 200 }} ml={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">filter</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="filter"
                  onChange={handleCategory}
                  size="small"
                >
                  {categoryList.length > 0
                    ? categoryList.map((c,index) => (
                        <MenuItem value={c} key={index}>{c}</MenuItem>
                      ))
                    : ""}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>

        <Grid container spacing={2}>
          {products.length !== 0
            ? products.map((p, index) => (
                <Grid item md={3} key={p.id}>
                  <ProductCard
                    id={p.id}
                    name={p.name}
                    image={p.image}
                    category={p.category}
                    price={p.price}
                    addToCart={addToCart}
                  />
                </Grid>
              ))
            : ""}
        </Grid>
      </Box>
    </Container>
  );
}
