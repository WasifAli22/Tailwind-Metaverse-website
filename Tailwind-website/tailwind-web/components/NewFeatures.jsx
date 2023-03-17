import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex-col flex sm:max-w-[250px] min-w-[210px]">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">Title {title}</h1>
    <p className="flex-1 font-normal text-[#b0b0b0] text-[18px] leading-[32px] mt-[16px] ">{subtitle}</p>

  </div >
);

export default NewFeatures;
