import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView } from "../views";

const Basics: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Barbz Medic - AI Portfolio Health Analytics</title>
          <meta
          name="description"
          content="Explore basic functionality of Barbz Medic portfolio health analytics"
        />
      </Head>
      <BasicsView />
    </div>
  );
};

export default Basics;
