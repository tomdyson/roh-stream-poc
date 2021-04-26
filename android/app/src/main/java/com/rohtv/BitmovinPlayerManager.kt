package com.rohtv

import android.util.Log
import android.view.ViewGroup
import com.bitmovin.player.BitmovinPlayerView
import com.bitmovin.player.api.event.data.ErrorEvent
import com.bitmovin.player.api.event.data.PlayingEvent
import com.bitmovin.player.api.event.listener.OnErrorListener
import com.bitmovin.player.api.event.listener.OnPlayingListener
import com.bitmovin.player.config.PlaybackConfiguration
import com.bitmovin.player.config.PlayerConfiguration
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.LifecycleEventListener
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.uimanager.events.RCTEventEmitter

class BitmovinPlayerManager(reactContext: ReactApplicationContext) :
    SimpleViewManager<BitmovinPlayerView>(), LifecycleEventListener {

    private var playerView: BitmovinPlayerView? = null

    init {
        reactContext.addLifecycleEventListener(this)
    }

    override fun getName() = REACT_CLASS

    override fun createViewInstance(reactContext: ThemedReactContext): BitmovinPlayerView {
        Log.e("PlayerManager", "setUri: creating!")
        val sourceURL =
            "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd"
        return BitmovinPlayerView(reactContext, playerConfiguration(sourceURL)).also {
            this.playerView = it

            it.layoutParams =
                ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
            playerView?.player?.addEventListener(object : OnErrorListener {

                override fun onError(event: ErrorEvent) {
                    Log.e("PlayerManager", "error: $event")
                }
            })
            playerView?.player?.addEventListener(object : OnPlayingListener {

                override fun onPlaying(event: PlayingEvent?) {
                    Log.e("PlayerManager", "playing!!!: $event")
                }

            })
        }
    }

    override fun onDropViewInstance(view: BitmovinPlayerView) {
        view.onDestroy()
        super.onDropViewInstance(view)
        playerView = null
    }

    @ReactProp(name = "uri")
    fun setUri(bitmovinPlayerView: BitmovinPlayerView, uri: String) {
        Log.e("PlayerManager", "setUri: setting uri! $uri")
        Log.e("PlayerManager", "setUri: player is: ${bitmovinPlayerView.player}")
        val playerConfiguration = playerConfiguration(uri)
        bitmovinPlayerView.player?.setup(playerConfiguration)
        bitmovinPlayerView.player?.play()
    }

    private fun playerConfiguration(uri: String): PlayerConfiguration {
        val playerConfiguration = PlayerConfiguration()
        playerConfiguration.setSourceItem(uri)

        val playbackConfiguration = PlaybackConfiguration()
        playbackConfiguration.isAutoplayEnabled = true
        playerConfiguration.playbackConfiguration = playbackConfiguration
        return playerConfiguration
    }

    override fun onHostResume() {
        playerView?.onStart()
        playerView?.onResume()
    }

    override fun onHostPause() {
        playerView?.onPause()
    }

    override fun onHostDestroy() {
        playerView?.onStop()
        playerView?.onDestroy()
    }


    companion object {

        private const val REACT_CLASS = "BitmovinPlayer"
    }
}
