import { useStore } from "@nanostores/react";
import { AnimatePresence, motion } from "framer-motion";
import { nanoid } from "nanoid";
import { useEffect, useState, useCallback } from "react";

import { clearSams, numSams } from "../../stores/sam";
import { Sticker, type StickerProps } from "./Sticker";

export const Stickers = () => {
  const [stickers, setStickers] = useState<StickerProps[]>([]);
  const [showShoo, setShowShoo] = useState(false);
  const $numSams = useStore(numSams);

  // Memoize the addSticker function to prevent it from changing on every render
  const addSticker = useCallback(() => {
    const getNewSticker = () => ({
      id: nanoid(),
      variant: $numSams,
    });
    setStickers((prev) => [...prev, getNewSticker()]);
  }, [$numSams]); // Only re-create this function when $numSams changes

  useEffect(() => {
    // If there are more Sams than stickers, add a new sticker
    if ($numSams > stickers.length) {
      addSticker();
    }

    // Clear stickers if there are no Sams
    if ($numSams === 0 && stickers.length > 0) {
      setStickers([]);
    }

    // Show or hide the Shoo button based on the number of Sams
    setShowShoo($numSams > 2);
  }, [$numSams, stickers.length, addSticker]);

  return (
    <div className="stickers" style={{ viewTransitionName: "stickers" }}>
      <AnimatePresence>
        {stickers.map(({ id, variant }) => (
          <Sticker key={id} id={id} variant={variant} />
        ))}
        {showShoo && (
          <div className="shoo-wrapper">
            <motion.button
              data-sam-shoo
              type="button"
              onClick={clearSams}
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              exit={{
                cursor: "default",
                scale: [
                  1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 0.8,
                ],
                x: [0, -8, -12, -12, 16, -36, 80, -48, 16, -8, 2, 0],
                opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
              }}
            >
              Shoo Sam
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
