import React from "react";
import Badge from "../Badge";
import AddCover from "../AddCover";
import AddImage from "../AddImage";
import InputField from "../InputField";
import VerticalFormItemInput from "../VerticalFormItemInput";
import IconText from "../IconText";
import IconText2 from "../IconText2";
import IconText3 from "../IconText3";
import IconText4 from "../IconText4";
import InputField2 from "../InputField2";
import ToggleButton from "../ToggleButton";
import AssetsPIP from "../AssetsPIP";
import MarketplaceIcon from "../MarketplaceIcon";
import "./AddProductemptyStateOpenOptions.css";

function AddProductemptyStateOpenOptions(props) {
  const {
    title,
    generalDetail,
    images,
    toStartSellingAl1,
    description,
    giveYourProductA,
    storeAddressLine1,
    addressLine1,
    add,
    weightDimensions,
    weight,
    length,
    width,
    height,
    inputType1,
    inputPlaceholder1,
    inputType2,
    inputPlaceholder2,
    inputType3,
    inputPlaceholder3,
    inputType4,
    inputPlaceholder4,
    variants,
    text1,
    supportingText,
    place1,
    saveDraft,
    addAttribute,
    status1,
    published,
    syncMarketplace,
    image113,
    image114,
    image115,
    image116,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    manageMultiChannels,
    pricing,
    toStartSellingAl2,
    normalPrice,
    costOfProduct,
    inputType5,
    inputPlaceholder5,
    price,
    text2,
    inventory,
    toStartSellingAl3,
    place2,
    status2,
    inputType6,
    inputPlaceholder6,
    inStock,
    chevronDown,
    badge1Props,
    addCoverProps,
    inputFieldProps,
    verticalFormItemInputProps,
    inputField2Props,
    badge2Props,
    marketplaceIconProps,
    toggleButtonProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="add-product-empty-state-open-options screen">
        <div className="flex-col">
          <div className="group-427319106">
            <Badge label={badge1Props.label} xmark={badge1Props.xmark} />
            <h1 className="title">{title}</h1>
          </div>
          <div className="overlap-group8">
            <div className="frame-1924">
              <div className="frame-1922">
                <div className="group-427318994">
                  <div className="general-detail inter-semi-bold-mirage-20px">{generalDetail}</div>
                </div>
                <div className="group-427318995">
                  <div className="images inter-semi-bold-oxford-blue-14px">{images}</div>
                  <p className="to-start-selling-al inter-normal-pale-sky-12px">{toStartSellingAl1}</p>
                </div>
                <div className="group-47968">
                  <div className="flex-row">
                    <AddCover addCover={addCoverProps.addCover} />
                    <div className="add-image-container">
                      <AddImage />
                      <AddImage />
                    </div>
                    <div className="add-image-container">
                      <AddImage />
                      <AddImage />
                    </div>
                    <div className="add-image-container">
                      <AddImage />
                      <AddImage />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-1923">
                <InputField
                  storeAddressLine1={inputFieldProps.storeAddressLine1}
                  inputType={inputFieldProps.inputType}
                  inputPlaceholder={inputFieldProps.inputPlaceholder}
                />
                <VerticalFormItemInput
                  title={verticalFormItemInputProps.title}
                  message={verticalFormItemInputProps.message}
                  inputProps={verticalFormItemInputProps.inputProps}
                />
                <div className="group-47966">
                  <div className="frame-185">
                    <div className="description inter-semi-bold-oxford-blue-14px">{description}</div>
                  </div>
                  <div className="frame-1412">
                    <div className="group-47913">
                      <div className="frame-1411">
                        <div className="frame-14">
                          <IconText />
                          <IconText />
                          <IconText2 />
                          <IconText2 />
                        </div>
                        <img className="line-4" src="/img/line-46-2.svg" alt="Line 46" />
                        <div className="frame-14">
                          <IconText2 />
                          <IconText2 />
                          <IconText2 />
                        </div>
                        <img className="line-4" src="/img/line-46-2.svg" alt="Line 47" />
                        <div className="frame-14">
                          <IconText3 />
                          <IconText4 />
                          <IconText3 />
                          <IconText3 />
                        </div>
                      </div>
                    </div>
                    <div className="frame-183">
                      <p className="give-your-product-a inter-normal-santas-gray-14px">{giveYourProductA}</p>
                    </div>
                  </div>
                </div>
                <InputField2
                  storeAddressLine1={inputField2Props.storeAddressLine1}
                  inputType={inputField2Props.inputType}
                  inputPlaceholder={inputField2Props.inputPlaceholder}
                />
              </div>
            </div>
            <div className="input-field">
              <div className="store-address-line-1 inter-semi-bold-oxford-blue-14px">{storeAddressLine1}</div>
              <div className="frame-183-1">
                <div className="address-line-1 inter-normal-santas-gray-14px">{addressLine1}</div>
                <div className="frame-2144">
                  <div className="add fontawesome6pro-solid-normal-mirage-14px">{add}</div>
                </div>
              </div>
            </div>
            <Badge label={badge2Props.label} xmark={badge2Props.xmark} className={badge2Props.className} />
          </div>
          <img className="line-3" src="/img/line-37-2.svg" alt="Line 37" />
          <div className="weight-dimensions inter-semi-bold-mirage-20px">{weightDimensions}</div>
          <div className="flex-row-1 inter-semi-bold-oxford-blue-14px">
            <div className="weight">{weight}</div>
            <div className="length">{length}</div>
            <div className="width">{width}</div>
            <div className="height">{height}</div>
          </div>
          <div className="overlap-group-container-1">
            <div className="overlap-group">
              <input
                className="x100 inter-normal-santas-gray-14px"
                name="100"
                placeholder={inputPlaceholder1}
                type={inputType1}
              />
            </div>
            <div className="overlap-group">
              <input
                className="x100-1 inter-normal-santas-gray-14px"
                name="100"
                placeholder={inputPlaceholder2}
                type={inputType2}
              />
            </div>
            <div className="overlap-group">
              <input
                className="x100-2 inter-normal-santas-gray-14px"
                name="100"
                placeholder={inputPlaceholder3}
                type={inputType3}
              />
            </div>
            <div className="overlap-group">
              <input
                className="x100-3 inter-normal-santas-gray-14px"
                name="100"
                placeholder={inputPlaceholder4}
                type={inputType4}
              />
            </div>
          </div>
          <img className="line-3" src="/img/line-37-2.svg" alt="Line 38" />
          <div className="test-variants">
            <div className="group-47969">
              <div className="variants inter-semi-bold-mirage-20px">{variants}</div>
            </div>
            <div className="frame-1896">
              <ToggleButton />
              <p className="text inter-normal-pale-sky-14px">{text1}</p>
            </div>
          </div>
          <img className="line-3" src="/img/line-37-2.svg" alt="Line 39" />
        </div>
        <div className="flex-col-1">
          <div className="group-427319107">
            <div className="supporting-text">{supportingText}</div>
            <div className="add-button">
              <div className="place inter-bold-mirage-12px">{place1}</div>
            </div>
            <div className="add-button">
              <div className="save-draft inter-bold-mirage-12px">{saveDraft}</div>
            </div>
            <div className="add-button-1">
              <img className="frame" src="/img/frame-44.svg" alt="Frame" />
              <div className="add-attribute">{addAttribute}</div>
            </div>
          </div>
          <div className="status inter-semi-bold-mirage-20px">{status1}</div>
          <div className="search">
            <AssetsPIP />
            <div className="published">{published}</div>
          </div>
          <img className="line-4-1" src="/img/line-47-4.svg" alt="Line 47" />
          <div className="flex-row-2">
            <div className="sync-marketplace inter-semi-bold-mirage-20px">{syncMarketplace}</div>
            <img className="frame-1" src="/img/frame-30.svg" alt="Frame" />
          </div>
          <div className="frame-1956">
            <MarketplaceIcon>{marketplaceIconProps.children}</MarketplaceIcon>
            <img className="image-113" src={image113} alt="image 113" />
            <img className="image-11" src={image114} alt="image 114" />
            <img className="image-11" src={image115} alt="image 115" />
            <img className="image-11" src={image116} alt="image 116" />
          </div>
          <p className="available-in-2-out-of-5-sales-channels">
            <span className="inter-normal-pale-sky-14px">{spanText1}</span>
            <span className="inter-semi-bold-mirage-14px">{spanText2}</span>
            <span className="inter-normal-pale-sky-14px">{spanText3}</span>
            <span className="inter-semi-bold-mirage-14px">{spanText4}</span>
            <span className="inter-normal-pale-sky-14px">{spanText5}</span>
          </p>
          <div className="frame-2138">
            <div className="frame-2137">
              <img className="frame" src="/img/frame-43.svg" alt="Frame" />
              <div className="manage-multi-channels">{manageMultiChannels}</div>
            </div>
          </div>
          <img className="line-4-1" src="/img/line-47-4.svg" alt="Line 48" />
          <div className="pricing inter-semi-bold-mirage-20px">{pricing}</div>
          <p className="to-start-selling-al-1 inter-normal-pale-sky-12px">{toStartSellingAl2}</p>
          <div className="flex-row-3 inter-semi-bold-oxford-blue-14px">
            <div className="normal-price">{normalPrice}</div>
            <div className="cost-of-product">{costOfProduct}</div>
          </div>
          <div className="overlap-group-container">
            <div className="overlap-group-2">
              <input
                className="text_input inter-normal-santas-gray-14px"
                name="text_input"
                placeholder={inputPlaceholder5}
                type={inputType5}
                required
              />
            </div>
            <div className="overlap-group-1">
              <div className="price inter-normal-santas-gray-14px">{price}</div>
            </div>
          </div>
          <div className="group-47970">
            <ToggleButton className={toggleButtonProps.className} />
            <div className="text-1">{text2}</div>
          </div>
          <img className="line-4-1" src="/img/line-47-4.svg" alt="Line 49" />
          <div className="inventory inter-semi-bold-mirage-20px">{inventory}</div>
          <p className="to-start-selling-al-2 inter-normal-pale-sky-12px">{toStartSellingAl3}</p>
          <div className="flex-row-4 inter-semi-bold-oxford-blue-14px">
            <div className="place-1">{place2}</div>
            <div className="status-1">{status2}</div>
          </div>
          <div className="overlap-group-container">
            <div className="overlap-group-1">
              <input
                className="x100-4 inter-normal-santas-gray-14px"
                name="100"
                placeholder={inputPlaceholder6}
                type={inputType6}
              />
            </div>
            <div className="overlap-group1">
              <div className="in-stock">{inStock}</div>
              <div className="chevron-down fontawesome6pro-solid-normal-mirage-14px">{chevronDown}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductemptyStateOpenOptions;
