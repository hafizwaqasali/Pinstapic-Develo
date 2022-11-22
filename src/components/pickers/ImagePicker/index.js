import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { height, width } from '~utills/Dimension';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import AppColors from '../../../utills/AppColors';
const ImagePickers = (
  { onFilesSelected, pickFromCamera = true, pickFromGallery = true },
  ref,
) => {
  const [isVisible, setVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    show: function () {
      setVisible(true);
    },
    hide: function () {
      setVisible(false);
    },
    cleanTempImages: () => {
      ImagePicker.clean()
        .then(() => {
          console.log('removed all tmp images from tmp directory');
        })
        .catch(console.log);
    },
  }));
  function openCamera() {
    ImagePicker.openCamera({
      cropping: true,
      mediaType: 'photo',
      compressImageQuality: 0.01,
      includeBase64: true,
    })
      .then((image) => onFilesSelected([image]))
      .catch((error) => {
        console.log(error);
      });
  }

  function openGallery() {
    ImagePicker.openPicker({
      cropping: true,
      mediaType: 'photo',
      compressImageQuality: 0.1,
      height: 400,
      width: 400,
      includeBase64: true,
    })
      .then((image) => onFilesSelected([image]))
      .catch((error) => {
        console.log(error);
      });
  }
  function openPicker(type = 0) {
    setVisible(false);
    setTimeout(type == 0 ? openCamera : openGallery, 400);
  }
  return (
    <Modal
      isVisible={isVisible}
      animationIn={'zoomInUp'}
      animationOut={'zoomOutDown'}>
      <View style={styles.imageModalContainer}>
        <TouchableOpacity
          style={styles.closeContainer}
          onPress={() => setVisible(false)}>
          <Image
            source={require('../../../assets/images/cancel.png')}
            style={styles.closeIconStyle}
          />
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          {pickFromCamera && (
            <TouchableOpacity
              style={styles.picOption}
              onPress={() => openPicker(0)}>
              <Image
                source={require('../../../assets/images/whitecamera.png')}
                style={styles.logoIconStyle}
              />
              <Text style={styles.picOptionText}>Take Photo</Text>
            </TouchableOpacity>
          )}
          <View style={styles.line} />
          {pickFromGallery && (
            <TouchableOpacity
              style={styles.picOption}
              onPress={() => openPicker(1)}>
              <Image
                source={require('../../../assets/images/gallery.png')}
                style={styles.logoIconStyle}
              />
              <Text style={styles.picOptionText}>Choose from Gallery</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};
export default forwardRef(ImagePickers);
const styles = StyleSheet.create({
  imageModalContainer: {
    // backgroundColor: 'white',
    backgroundColor: AppColors.blue,
    width: width(70),
    borderRadius: 20,
    alignSelf: 'center',
    paddingBottom: height(3),
  },
  closeContainer: {
    width: width(70),
    alignSelf: 'center',
    alignItems: 'flex-end',
    marginTop: width(4),
    justifyContent: 'space-between',
    paddingHorizontal: width(4),
  },
  buttonContainer: {
    width: width(70),
    height: height(15),
    justifyContent: 'space-evenly',
  },
  picOption: {
    paddingLeft: width(12),
    alignItems: 'center',
    flexDirection: 'row',
  },
  picOptionText: {
    marginLeft: width(2),
    fontSize: width(4),
    // color: AppColors.black90,
    color: AppColors.white
  },
  line: {
    width: '70%',
    alignSelf: 'center',
    backgroundColor: 'gray',
    height: 0.5,
  },
  logoIconStyle: {
    width: 50,
    height: 50,
  },
  closeIconStyle: {
    width: 20,
    height: 20,
  },
});
