import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  Dimensions,
} from "react-native";

export default function HomeScreen() {
  const introductionImages = [
    "https://images.unsplash.com/photo-1546611723-b1c17708a946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://plus.unsplash.com/premium_photo-1670963025556-c2d4dc880a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",

    "https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGNvb2tpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
  ];
  const explore = {
    stats: [
      {
        number: 500,
        text: "Ingenious Recipes",
      },
      {
        number: 300,
        text: "Vibrant Dishes",
      },
      {
        number: 150,
        text: "Happy Users",
      },
    ],
    faq: [
      {
        question: "How does EatEase reduce food wastage?",
        answer:
          "EatEase helps you utilize the ingredients you already have in your kitchen by providing Spoonacular recipes that match your inputs, reducing the need to throw away expired or unused ingredients.",
      },
      {
        question: "How does EatEase access Spoonacular recipes?",
        answer:
          "Our app integrates with Spoonacular’s API to access and search their extensive recipe database based on the ingredients you provide.",
      },
      {
        question: "Is EatEase compatible with different diets?",
        answer:
          "Absolutely! EatEase can filter results to meet various dietary requirements and preferences, such as vegan, gluten-free, or low-carb.",
      },
      {
        question: "Do I need to create an account?",
        answer:
          "While creating an account is not mandatory, having one unlocks additional features like saving your favorite recipes for easy access later.",
      },
    ],
  };
  const screenWidth = Dimensions.get("window").width - 16;
  const fiftyPercentBorderRadius = screenWidth / 2;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text
            style={[
              styles.titleText,
              { textAlign: "center", textTransform: "uppercase" },
            ]}
          >
            Wasteless
          </Text>
        </View>
        <View style={styles.introduction}>
          <Text style={[styles.text, { marginBottom: 16 * 1.5 }]}>––––––</Text>
          <Text style={[styles.text, { fontSize: 16 * 1.25 }]}>
            Welcome to the world of stress-free cooking with EatEase, the
            revolutionary mobile app that lets you search Spoonacular recipes
            based on what’s in your pantry! Say goodbye to food wastage and
            hello to endless culinary creations.
          </Text>
        </View>
        {introductionImages.map((image, index) => (
          <Image
            key={index}
            source={{
              uri: image,
            }}
            style={[
              styles.introductionImages,
              index === 0
                ? {
                    borderTopRightRadius: fiftyPercentBorderRadius,
                    borderBottomLeftRadius: fiftyPercentBorderRadius,
                  }
                : index === 1
                ? {
                    borderRadius: (16 * 12) / 2,
                    borderBottomLeftRadius: 0,
                  }
                : { borderRadius: (16 * 12) / 2 },
            ]}
          />
        ))}
      </View>

      <View style={styles.explore}>
        <Text style={styles.titleText}>Discover Flavorful Recipes</Text>
        <Text style={[styles.text, { marginTop: 16, fontSize: 16 * 1.25 }]}>
          No more scrambling for dinner ideas or throwing away expired
          ingredients. EatEase connects you to Spoonacular’s wide range of
          delicious recipes that match the ingredients you have on hand. Just
          input what’s in your kitchen, and we’ll do the rest.
        </Text>
        {explore.stats.map((stat, index) => (
          <View key={index} style={{ marginTop: 16 * 2 }}>
            <Text style={[styles.titleText, { fontSize: 16 * 2 }]}>
              {stat.number}
            </Text>
            <Text style={[styles.text, { fontSize: 16 }]}>{stat.text}</Text>
          </View>
        ))}
        <View>
          <Text
            style={[styles.titleText, { marginTop: 16 * 2, fontSize: 16 * 2 }]}
          >
            Frequently Asked Questions
          </Text>
          {explore.faq.map((faq, index) => (
            <View key={index} style={{ marginTop: 16 * 2 }}>
              <Text style={[styles.text, styles.faqTitle]}>{faq.question}</Text>
              <Text style={[styles.text, { marginBottom: 16 / 2 }]}>
                {faq.answer}
              </Text>
            </View>
          ))}
        </View>
        <Text style={[styles.text, styles.footerText]}>EatEase 2023 ✌🏼</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  text: {
    fontSize: 16,
    fontFamily: "figtree-regular",
  },
  titleText: {
    fontSize: 16 * 2.75,
    fontFamily: "limelight-regular",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  header: {
    backgroundColor: "#FB6107",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16 * 1.5,
    paddingVertical: 16 * 2,
  },
  title: {
    borderWidth: 1,
    borderRadius: 16 * 4,
    paddingVertical: 16,
    paddingHorizontal: 16 * 1.5,
    width: "100%",
  },
  introduction: {
    backgroundColor: "#B6B6B6",
    marginTop: 16 * 1.5,
    width: "100%",
    padding: 16 * 3,
    borderRadius: 16 * 4,
    borderTopRightRadius: 0,
  },
  introductionImages: {
    width: "100%",
    height: 16 * 12,
    resizeMode: "cover",
    marginTop: 16 * 1.5,
  },
  explore: {
    backgroundColor: "#F4DF46",
    padding: 16 * 1.5,
  },
  faqTitle: {
    fontSize: 16 * 1.25,
    fontFamily: "figtree-medium",
    marginBottom: 16 * 0.75,
  },
  footerText: {
    marginTop: 16,
    fontSize: 16 * 0.75,
    fontFamily: "figtree-medium",
    textAlign: "center",
  },
});
