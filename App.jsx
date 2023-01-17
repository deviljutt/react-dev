import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import AddProductemptyStateOpenOptions from "./components/AddProductemptyStateOpenOptions";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|add-product-empty-state-open-options)">
          <AddProductemptyStateOpenOptions {...addProductemptyStateOpenOptionsData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const badge1Data = {
    label: "new",
    xmark: "pen",
};

const addCoverData = {
    addCover: "Add Cover",
};

const inputFieldData = {
    storeAddressLine1: "Title",
    inputType: "text",
    inputPlaceholder: "Jacket, Sunglasses...",
};

const inputData = {
    inputType: "text",
    inputPlaceholder: "Jacket, Sunglasses...",
};

const verticalFormItemInputData = {
    title: "Title",
    message: "Please input passenger's name or delete this field.",
    inputProps: inputData,
};

const inputField2Data = {
    storeAddressLine1: "SKU",
    inputType: "text",
    inputPlaceholder: "Add your product SKU number...",
};

const badge2Data = {
    label: "Headphone",
    xmark: "xmark",
    className: "badge-1",
};

const marketplaceIconData = {
    children: "globe",
};

const toggleButton2Data = {
    className: "toggle-button",
};

const addProductemptyStateOpenOptionsData = {
    title: "add product.",
    generalDetail: "general detail",
    images: "Images",
    toStartSellingAl1: "Add up to 10 images to your product.",
    description: "Description",
    giveYourProductA: <React.Fragment>Give your product a short and clear description.<br />120-160 characters is the recommended length for search engines....</React.Fragment>,
    storeAddressLine1: "Category",
    addressLine1: "Select collection...",
    add: "Add",
    weightDimensions: "weight & dimensions.",
    weight: "Weight",
    length: "Length",
    width: "Width",
    height: "Height",
    inputType1: "number",
    inputPlaceholder1: "100...",
    inputType2: "number",
    inputPlaceholder2: "100...",
    inputType3: "number",
    inputPlaceholder3: "100...",
    inputType4: "number",
    inputPlaceholder4: "100...",
    variants: "variants.",
    text1: "Set up variants to add options for your product (e.g. different sizes, colors, order cycle)",
    supportingText: "Preview",
    place1: "Back",
    saveDraft: "Save draft",
    addAttribute: "Publish product",
    status1: "Status",
    published: "Published",
    syncMarketplace: "sync marketplace",
    image113: "/img/image-113-2@2x.png",
    image114: "/img/image-114-2@2x.png",
    image115: "/img/image-115-2@2x.png",
    image116: "/img/image-116-2@2x.png",
    spanText1: "Available in ",
    spanText2: "2 ",
    spanText3: "out of ",
    spanText4: "5",
    spanText5: " sales channels.",
    manageMultiChannels: "Manage Multi Channels",
    pricing: "pricing",
    toStartSellingAl2: "Configure the pricing for this product.",
    normalPrice: "Normal price",
    costOfProduct: "Cost of product",
    inputType5: "number",
    inputPlaceholder5: "฿",
    price: "฿",
    text2: "Instant discount",
    inventory: "inventory",
    toStartSellingAl3: "Configure the inventory and stock for this product.",
    place2: "Stock",
    status2: "Status",
    inputType6: "number",
    inputPlaceholder6: "100...",
    inStock: "In stock",
    chevronDown: "chevron-down",
    badge1Props: badge1Data,
    addCoverProps: addCoverData,
    inputFieldProps: inputFieldData,
    verticalFormItemInputProps: verticalFormItemInputData,
    inputField2Props: inputField2Data,
    badge2Props: badge2Data,
    marketplaceIconProps: marketplaceIconData,
    toggleButtonProps: toggleButton2Data,
};

