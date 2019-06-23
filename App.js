import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  NavBarBottom: {
    backgroundColor: 'white',
    height: 54,
    flexDirection: 'row',
    shadowRadius: 10,
    shadowColor: 'white',
    elevation: 10
  },
  NavBottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  NavIcon: {
    width: 26,
    height: 26
  },
  NavBottomText: {
    fontSize: 10,
    marginTop: 4,
    color: '#545454'
  },
  SearchStyle: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 25,
    height: 40,
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 20,
    backgroundColor: 'white',
    marginRight: 18
  },
  gopayHeader: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2C5FB8',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 14
  },
  gopayFooter: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 14,
    backgroundColor: '#2F65BD',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  gopayFooterIcon: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15
  },
  gojekFeature: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 18
  },
  gojekFeatureWrap: {
    width: '25%',
    alignItems: 'center'
  },
  gojekFeatureIcon: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gojekFeatureText: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6
  }
});

export default function App() {
  return (
    // Wrapper (body Container)
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        {/* SearchBar Gojek */}
        <View
          style={{ marginHorizontal: 17, flexDirection: 'row', paddingTop: 35 }}
        >
          <View style={{ position: 'relative', flex: 1 }}>
            <TextInput
              placeholder="Search GO-JEK services..."
              style={styles.SearchStyle}
            />
            <Image
              source={require('./assets/icon/search.png')}
              style={{ position: 'absolute', top: 8, left: 12 }}
            />
          </View>
          <TouchableOpacity
            style={{
              width: 35,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image source={require('./assets/icon/promo.png')} />
          </TouchableOpacity>
        </View>

        {/* Gopay Feature Gojek*/}
        <View style={{ marginHorizontal: 17, marginTop: 8 }}>
          <View style={styles.gopayHeader}>
            <Image source={require('./assets/icon/gopay.png')} />
            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>
              Rp50.379
            </Text>
          </View>
          <View style={styles.gopayFooter}>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
              <Image source={require('./assets/icon/pay.png')} />
              <Text style={styles.gopayFooterIcon}>Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
              <Image source={require('./assets/icon/nearby.png')} />
              <Text style={styles.gopayFooterIcon}>Nearby</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
              <Image source={require('./assets/icon/topup.png')} />
              <Text style={styles.gopayFooterIcon}>Top Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
              <Image source={require('./assets/icon/more.png')} />
              <Text style={styles.gopayFooterIcon}>More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Feature GOjek */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: 0,
            marginTop: 18
          }}
        >
          <View style={styles.gojekFeature}>
            <TouchableOpacity style={styles.gojekFeatureWrap}>
              <View style={styles.gojekFeatureIcon}>
                <Image source={require('./assets/icon/go-ride.png')} />
              </View>
              <Text style={styles.gojekFeatureText}>GO-RIDE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gojekFeatureWrap}>
              <View style={styles.gojekFeatureIcon}>
                <Image source={require('./assets/icon/go-car.png')} />
              </View>
              <Text style={styles.gojekFeatureText}>GO-CAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gojekFeatureWrap}>
              <View style={styles.gojekFeatureIcon}>
                <Image source={require('./assets/icon/go-bluebird.png')} />
              </View>
              <Text style={styles.gojekFeatureText}>GO-BLUEBIRD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gojekFeatureWrap}>
              <View style={styles.gojekFeatureIcon}>
                <Image source={require('./assets/icon/go-send.png')} />
              </View>
              <Text style={styles.gojekFeatureText}>GO-SEND</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
              marginBottom: 18
            }}
          >
            <TouchableOpacity style={styles.gojekFeatureWrap}>
              <View style={styles.gojekFeatureIcon}>
                <Image source={require('./assets/icon/go-deals.png')} />
              </View>
              <Text style={styles.gojekFeatureText}>GO-DEALS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gojekFeatureWrap}>
              <View style={styles.gojekFeatureIcon}>
                <Image source={require('./assets/icon/go-pulsa.png')} />
              </View>
              <Text style={styles.gojekFeatureText}>GO-PULSA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gojekFeatureWrap}>
              <View style={styles.gojekFeatureIcon}>
                <Image source={require('./assets/icon/go-food.png')} />
              </View>
              <Text style={styles.gojekFeatureText}>GO-FOOD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gojekFeatureWrap}>
              <View style={styles.gojekFeatureIcon}>
                <Image source={require('./assets/icon/go-more.png')} />
              </View>
              <Text style={styles.gojekFeatureText}>MORE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: 17,
            flexDirection: 'row',
            backgroundColor: '#F2F2F4',
            marginTop: 5,
            padding: 10
          }}
        />

        {/* Gojek New Section Feature */}
        <View style={{ paddingTop: 16, paddingHorizontal: 16 }}>
          <View style={{ position: 'relative' }}>
            <Image
              source={require('./assets/dummy/sepak-bola.jpg')}
              style={{ height: 170, width: '100%', borderRadius: 6 }}
            />
            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'black',
                opacity: 0.2,
                borderRadius: 6
              }}
            />
            <View
              style={{
                height: 15,
                width: 60,
                position: 'absolute',
                top: 16,
                left: 16
              }}
            >
              <Image
                source={require('./assets/logo/white.png')}
                style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
              />
            </View>
          </View>
          <View
            style={{
              paddingTop: 16,
              paddingBottom: 20
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }}
            >
              GO-NEWS
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: '#7A7A7A',
                marginBottom: 11
              }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#61A756',
                paddingHorizontal: 12,
                paddingVertical: 11,
                borderRadius: 5,
                alignSelf: 'flex-end'
              }}
            >
              <Text
                style={{ fontSize: 13, fontWeight: 'bold', color: 'white' }}
              >
                READ
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* HR garis pembagi menu */}
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#E8E9ED',
            marginTop: 16,
            marginBottom: 20,
            marginHorizontal: 16
          }}
        />

        {/* Gojek Nearby Go-Food Feature */}
        <View>
          <View
            style={{
              height: 15,
              width: 60,
              marginLeft: 16,
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Image
              source={require('./assets/logo/go-food.png')}
              style={{
                width: undefined,
                height: undefined,
                resizeMode: 'contain',
                flex: 1
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 16,
              paddingHorizontal: 16
            }}
          >
            <Text
              style={{ fontSize: 17, fontWeight: 'bold', color: '#1C1C1C' }}
            >
              Nearby Restaurants
            </Text>
            <Text
              style={{ fontSize: 17, fontWeight: 'bold', color: '#61A756' }}
            >
              See All
            </Text>
          </View>
          <ScrollView
            horizontal
            style={{ flexDirection: 'row', paddingLeft: 16 }}
          >
            <View style={{ marginRight: 16 }}>
              <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                <Image
                  source={require('./assets/dummy/go-food-kfc.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 10
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1C1C1C',
                  marginTop: 14
                }}
              >
                KFC Jagonya Ayam
              </Text>
            </View>
            <View style={{ marginRight: 16 }}>
              <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                <Image
                  source={require('./assets/dummy/go-food-kfc.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 10
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1C1C1C',
                  marginTop: 14
                }}
              >
                KFC Jagonya Ayam
              </Text>
            </View>
            <View style={{ marginRight: 16 }}>
              <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                <Image
                  source={require('./assets/dummy/go-food-kfc.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 10
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1C1C1C',
                  marginTop: 14
                }}
              >
                KFC Jagonya Ayam
              </Text>
            </View>
            <View style={{ marginRight: 16 }}>
              <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                <Image
                  source={require('./assets/dummy/go-food-kfc.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 10
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1C1C1C',
                  marginTop: 14
                }}
              >
                KFC Jagonya Ayam
              </Text>
            </View>
            <View style={{ marginRight: 16 }}>
              <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                <Image
                  source={require('./assets/dummy/go-food-kfc.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 10
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1C1C1C',
                  marginTop: 14
                }}
              >
                KFC Jagonya Ayam
              </Text>
            </View>
          </ScrollView>

          {/* HR garis pembagi menu */}
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: '#E8E9ED',
              marginTop: 16,
              marginBottom: 20,
              marginHorizontal: 16
            }}
          />
        </View>
      </ScrollView>

      {/* Navigation Bottom Bar */}
      <View style={styles.NavBarBottom}>
        <TouchableOpacity style={styles.NavBottom}>
          <Image
            style={styles.NavIcon}
            source={require('./assets/icon/home.png')}
          />
          <Text style={styles.NavBottomText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.NavBottom}>
          <Image
            style={styles.NavIcon}
            source={require('./assets/icon/order.png')}
          />
          <Text style={styles.NavBottomText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.NavBottom}>
          <Image
            style={styles.NavIcon}
            source={require('./assets/icon/help.png')}
          />
          <Text style={styles.NavBottomText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.NavBottom}>
          <Image
            style={styles.NavIcon}
            source={require('./assets/icon/inbox.png')}
          />
          <Text style={styles.NavBottomText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.NavBottom}>
          <Image
            style={styles.NavIcon}
            source={require('./assets/icon/account.png')}
          />
          <Text style={styles.NavBottomText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
