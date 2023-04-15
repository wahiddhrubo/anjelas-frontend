export default function Work({}) {
	return (
		<div>
			<div className={styles.workTextBox}>
				<div className={styles.workHighlight}>Work</div>
				<div className={styles.workTitle}>How It Works</div>
				<div className={styles.workDetails}>
					From selection to delivery, our simple process makes it a
					breeze to enjoy our tasty cuisine
				</div>
			</div>
			{icon.map((i, index) => (
				<div key={index} className={styles.iconBox}>
					{i.icon}
					<div className={styles.iconName}>{i.name}</div>
					<div className={styles.iconDet}>{i.details}</div>
				</div>
			))}
		</div>
	);
}
