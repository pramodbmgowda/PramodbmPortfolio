// import PropTypes from "prop-types";

// const AchievementCard = ({ imgSrc, title, tags, achievementLink, classes }) => {
//   return (
//     <div
//       className={
//         "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
//         (classes || "")
//       }
//     >
//       {/* Image Box */}
//       <div className="mb-4 w-full aspect-square rounded-lg overflow-hidden bg-zinc-900 flex items-center justify-center">
//         <img
//           src={imgSrc}
//           alt={title}
//           loading="lazy"
//           className="max-w-[70%] max-h-[70%] object-contain"
//         />
//       </div>

//       {/* Description */}
//       <div className="flex items-start justify-between gap-4">
//         <div className="flex-1">
//           <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>

//           <div className="flex flex-wrap items-center gap-2">
//             {tags.map((label, index) => (
//               <span
//                 key={index}
//                 className="grid items-center h-8 px-3 text-sm rounded-lg text-zinc-400 bg-zinc-50/5"
//               >
//                 {label}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="grid rounded-lg w-11 h-11 place-items-center bg-sky-400 text-zinc-950 shrink-0 mt-1">
//           <span className="material-symbols-rounded" aria-hidden="true">
//             arrow_outward
//           </span>
//         </div>
//       </div>

//       {/* Full Clickable Area */}
//       <a
//         href={achievementLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="absolute inset-0"
//       ></a>
//     </div>
//   );
// };

// AchievementCard.propTypes = {
//   imgSrc: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   tags: PropTypes.arrayOf(PropTypes.string).isRequired,
//   achievementLink: PropTypes.string,
//   classes: PropTypes.string,
// };

// export default AchievementCard;

import PropTypes from "prop-types";

const AchievementCard = ({ imgSrc, title, achievementLink, classes }) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        (classes || "")
      }
    >
      {/* Image Box */}
      <div className="mb-4 w-full aspect-square rounded-lg overflow-hidden bg-zinc-900 flex items-center justify-center">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="max-w-[70%] max-h-[70%] object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Description */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
        </div>

        <div className="grid rounded-lg w-11 h-11 place-items-center bg-sky-400 text-zinc-950 shrink-0 mt-1">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>

      {/* Full Clickable Area */}
      {achievementLink && (
        <a
          href={achievementLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
        ></a>
      )}
    </div>
  );
};

AchievementCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  achievementLink: PropTypes.string,
  classes: PropTypes.string,
};

export default AchievementCard;
