import Head from "next/head";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { UI_TEXT } from "../constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <main className="min-h-screen bg-gray-100 p-6 space-y-4">
        <Card
          title="Luxury Apartment"
          image="https://via.placeholder.com/400"
          description="A modern apartment with a beautiful view."
          price="$1,200/month"
        />
        <Button
          label={UI_TEXT.BOOK_NOW}
          onClick={() => alert("Booking now...")}
        />
      </main>
    </>
  );
}
