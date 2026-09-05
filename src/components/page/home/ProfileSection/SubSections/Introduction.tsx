"use client";

import clsx from "clsx";
import { Lottie } from "lottie-react";

import AnimHelloSaturn from "#assets/animations/space/HelloSaturn.json";
import Hello from "#assets/img/text/hello.svg";
import Button from "#components/button/Button";
import Birthday from "#components/layouts/Birthday";
import { EProfileID } from "#data/constants/ReactID";
import { useUserData } from "#data/context";

import styles from "./introduction.module.scss";

const { INTRODUCTION_HELLO } = EProfileID;

export default function Introduction(props: IIntroductionProps) {
	const { className } = props;
	const { personal } = useUserData();
	const { name, dob, hobbies, location } = personal;

	const introductionClass = clsx(styles.introduction, className);

	return (
		<div className={introductionClass}>
			<h1>Introduction</h1>
			<Hello className={styles.hello} id={INTRODUCTION_HELLO} />
			<div className={styles.about}>
				<span>
					I’m {name}, a {<Birthday dob={dob} label="-year-old" />} tech enthusiast based in {location.full}. Heavily fueled by my passion and embrace the mindset of a
					“lifelong learner” constantly striving to enhance both my technical expertise and personal growth!
				</span>
				<span>
					Besides my enthusiasm for all things tech, I find joy in engaging with various hobbies such as {hobbies[0]}, {hobbies[1]}, {hobbies[2]}, and {hobbies[3]}.
				</span>
			</div>
			<Button className={styles.more} label="more about me" link="/about" back />
		</div>
	);
}

export const IntroductionPlanet = () => {
	return <Lottie autoplay className={styles.introductionPlanet} loop src={AnimHelloSaturn} />;
};

interface IIntroductionProps {
	className?: string;
}
