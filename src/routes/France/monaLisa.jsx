import React from "react";

export default function monaLisa() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl pt-3 text-center">The Mona Lisa</h1>
      <div className="w-3/4 flex flex-row justify-center min-h-screen mt-6">
        <div className="m-1 w-1/3 p-2">
          <img src="https://i.imgur.com/pCZrlUb.jpg" alt="Mona Lisa" />
        </div>
        <div className="w-2/3 p-4 mt-3 text-center text-xl backdrop-blur-sm h-1/2">
          <p className="p-4 bg-transparent">
            The Mona Lisa is a portrait of Lisa Giacondo, painted by Leonardo Da
            Vinci somewhere between 1503 and 1519. It was commissioned by her
            husband, Francesco di Bartolomeo del Giocondo. The painting is a
            half length portrait whose medium was oil on a poplar wood panel. It
            is the most famous portrait in the world due to the enigmatic smile
            on Lisa Giacondo and the mysteries that surrounded her and her
            smile. The painting was in Leonardo's posession at the time of his
            death when he was in the court of King Francis I. Upon his death,
            King Francis I acquired it. For centuries it remained part of the
            royal collection. It had been hanging in Napolean's bedroom when it
            was claimed during the French Revolution (1787-1799). It has been
            displayed at the Louvre Museum in Paris since 1804. The painting was
            stolen in 1911 which made it even more famous. It didn't reappear
            for two years until a former Louvre worker tried selling it in
            Florence, Italy to an art dealer who alerted the authorities.
          </p>

          <p>The information on this page is from the following websites:</p>

          <ul>
            <li>
              <a href="https://en.wikipedia.org/wiki/Mona_Lisa" target="_blank">
                Wikepedia
              </a>
            </li>
            <li>
              <a
                href="https://www.britannica.com/topic/Mona-Lisa-painting"
                target="_blank"
              >
                Britannica
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}